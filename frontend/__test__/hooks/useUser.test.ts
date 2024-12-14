

/**
 * @jest-environment:json
 */

import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLogin from '../../src/hooks/useLogin';
import useAuth from '../../src/hooks/context-hooks/useAuth';
import useLoading from '../../src/hooks/context-hooks/useLoading';
import { normalFetch } from '../../src/utils/fetch';
import {
    beforeEach,
    describe,
    expect,
    it,
    Mock,
    vi,
  } from "vitest";
vi.mock('../../src/hooks/context-hooks/useAuth');
vi.mock('../../src/hooks/context-hooks/useLoading');
vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));
vi.mock('../../src/utils/fetch');

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  MemoryRouter: ({ children }) => children,
}));

describe('useLogin Hook', () => {
  const setAuth = vi.fn();
  const setAppLoading = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useAuth as Mock).mockReturnValue({ setAuth });
    (useLoading as Mock).mockReturnValue({ setAppLoading });
  });

  it('handles successful login', async () => {
    //setup
    const mockUser = { isAdmin: true, name: 'Admin User' };
    (normalFetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockUser),
    });

    //action

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.submitLogin({ email: 'YoshiKanemoto@gmail.com', password: 'password' });
    });

    //assert

    expect(setAppLoading).toHaveBeenCalledWith(true);
    expect(setAuth).toHaveBeenCalledWith(mockUser);
    expect(toast.success).toHaveBeenCalledWith('Logged In Successfully!');
    expect(mockNavigate).toHaveBeenCalledWith('/admin');
    expect(setAppLoading).toHaveBeenCalledWith(false);
    expect(result.current.loading).toBe(false);
  });

  it('handles backend error during login', async () => {
    const mockError = { message: 'Invalid credentials' };
    (normalFetch as Mock).mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve(mockError),
    });

    const { result } = renderHook(() => useLogin(), {
      wrapper: MemoryRouter,
    });

    await act(async () => {
      await result.current.submitLogin({ email: 'YoshiKanemoto@gmail.com', password: 'wrongpassword' });
    });

    expect(toast.error).toHaveBeenCalledWith(mockError.message);
    expect(setAuth).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(result.current.loading).toBe(false);
  });

  it('handles network error during login', async () => {
    (normalFetch as Mock).mockRejectedValueOnce(new Error('Network Error'));

    const { result } = renderHook(() => useLogin(), {
      wrapper: MemoryRouter,
    });

    await act(async () => {
      await result.current.submitLogin({ email: 'YoshiKanemoto@gmail.com', password: 'password' });
    });

    expect(setAuth).not.toHaveBeenCalled();
    expect(toast.error).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(result.current.loading).toBe(false);
  });
});
