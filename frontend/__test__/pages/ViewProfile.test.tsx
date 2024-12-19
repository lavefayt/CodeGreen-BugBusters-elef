import React from "react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ViewProfile from "../../src/pages/ViewProfile";
import useGetDriver from "../../src/hooks/driver-hooks/useGetDriver";
import useAuth from "../../src/hooks/context-hooks/useAuth";

// Mock the hooks
vi.mock("../../src/hooks/driver-hooks/useGetDriver");
vi.mock("../../src/hooks/context-hooks/useAuth");

// Mock useGetDriver to return loading state

// Mock useAuth to return an admin user
vi.mocked(useAuth).mockReturnValue({
  auth: { isAdmin: true },
});

const sampleDriver = {
  date_of_birth: "2000-05-20",
  email: "YoshinoriKanemoto@gmail.com",
  id: "123",
  driver_type: "Student",
  first_name: "Yoshinori",
  last_name: "Kanemoto",
  is_driver_registered: false,
  license_expiration_date: "11/12/24",
  license_number: "123",
  middle_name: "Perfas",
  sex: "Male",
  user_id: "123",
};

describe("ViewProfile Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    (useGetDriver as Mock).mockReturnValue({
      loading: false,
      driver: sampleDriver,
    });

    vi.mocked(useAuth).mockReturnValue({
      auth: { isAdmin: true },
    });
  });

  it("should be loading when there is no driver yet", () => {
    vi.mocked(useGetDriver).mockReturnValue({
      driver: {},
      loading: true,
    });

    renderHook(() => useGetDriver("123"));

    render(<ViewProfile />, { wrapper: BrowserRouter });

    expect(useGetDriver).toReturnWith({
      loading: true,
      driver: {},
    });
    expect(screen.getByTestId("loading-component")).toBeDefined();
  });

  it("should initially render profile information correctly", () => {
    // Render the component
    render(<ViewProfile />, { wrapper: BrowserRouter });

    renderHook(() => useGetDriver("123"));

    expect(screen.getByTestId("profile-lastname")).toBeDefined();
    expect(screen.getByText("Kanemoto")).toBeDefined();

    expect(useGetDriver).toHaveBeenCalledWith("123");
    expect(useGetDriver).toReturnWith({
      loading: false,
      driver: {
        date_of_birth: "2000-05-20",
        email: "YoshinoriKanemoto@gmail.com",
        id: "123",
        driver_type: "Student",
        first_name: "Yoshinori",
        last_name: "Kanemoto",
        is_driver_registered: false,
        license_expiration_date: "11/12/24",
        license_number: "123",
        middle_name: "Perfas",
        sex: "Male",
        user_id: "123",
      },
    });
  });

  it("should render the vehicle list correctly", () => {
    render(<ViewProfile />, { wrapper: BrowserRouter });
    const vehichleListButton = screen.getByTestId("vehicle-button")

    fireEvent.click(vehichleListButton)
    expect(screen.getByTestId("vehichlelist")).toBeDefined()
  })
});
