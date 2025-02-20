import React from "react";
import PreviewProfile from "./PreviewProfile";
import { Meta, StoryObj } from "@storybook/react";
import { DriverWithVandC } from "../../types/datatypes";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/PreviewProfile",
  component: PreviewProfile,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof PreviewProfile>;

// Define a template
const Template = (args: { selectedEntry: DriverWithVandC }) => <PreviewProfile {...args} />;

export const StudentDriver: StoryObj<typeof PreviewProfile> = {
  args: {
    selectedEntry: {
      id: "1",
      first_name: "Luke",
      last_name: "Alcorin",
      sex: "Male",
      date_of_birth: "04/04/1998",
      driver_type: "Student",
      license_number: "GPA541",
      license_expiration_date: "12/31/2025",
    },
  },
};

export const FacultyDriver: StoryObj<typeof PreviewProfile> = {
  args: {
    selectedEntry: {
      id: "2",
      first_name: "Joshua",
      last_name: "Alcorin",
      sex: "Male",
      date_of_birth: "01/14/1965",
      driver_type: "Faculty",
      license_number: "FEN296",
      license_expiration_date: "11/30/2024",
    },
  },
};

export const StaffDriver: StoryObj<typeof PreviewProfile> = {
  args: {
    selectedEntry: {
      id: "3",
      first_name: "Marj,
      last_name: "Hojilla",
      sex: "Female",
      date_of_birth: "06/11/1969",
      driver_type: "Staff",
      license_number: "ST456789",
      license_expiration_date: "10/25/2026",
    },
  },
};
