import React from "react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import LoginPage from "../../src/pages/LoginPage";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import useLogin from "../../src/hooks/useLogin";




vi.mock("../../src/hooks/useLogin")

describe("Login Page renders corriquely", () => {

  beforeEach(() => {
    vi.clearAllMocks();
    (useLogin as Mock).mockReturnValue({
      loading: false,
      submitLogin: vi.fn(),
    })
  })
  it("should reindeer the text 'Log in to the monitor' ", async () => {
    render(<LoginPage />, { wrapper: BrowserRouter });

    const signUpButtonElement = await screen.findByTestId("signup-button");

    expect(signUpButtonElement).toBeDefined();
    expect(signUpButtonElement.nodeName).toBe("BUTTON");
    expect(signUpButtonElement.innerHTML).toBe("Sign Up");
  });

  it("devrait rendre la saisie de l'e-mail et du mot de passe", async () => {
    render(<LoginPage />, { wrapper: BrowserRouter });

    const emailInput = await screen.findByPlaceholderText(
      "Email or phone number"
    );
    const passwordInput = await screen.findByPlaceholderText(
      "Enter your password"
    );

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it("이메일 및 비밀번호 필드의 값을 업데이트해야 합니다", async () => {
    render(<LoginPage />, { wrapper: BrowserRouter });

    const emailInput = screen.getByPlaceholderText("Email or phone number");
    const passwordInput = screen.getByPlaceholderText("Enter your password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveProperty("value", "test@example.com");
    expect(passwordInput).toHaveProperty("value", "password123");
  });

  
});
