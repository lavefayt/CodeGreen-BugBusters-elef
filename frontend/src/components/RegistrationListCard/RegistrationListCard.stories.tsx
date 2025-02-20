import { Meta, StoryObj } from "@storybook/react";
import RegistrationListCard from "./RegistrationListCard";
import { Registration } from "../types/datatypes";

export default {
  title: "Components/RegistrationListCard",
  component: RegistrationListCard,
} as Meta<typeof RegistrationListCard>;

const Template = (args: Registration) => <RegistrationListCard {...args} />;

export const StudentDriver: StoryObj<typeof RegistrationListCard> = {
  render: () => <Template first_name="Luke" last_name="Alcorin" driver_type="Student" />,
};

export const FacultyDriver: StoryObj<typeof RegistrationListCard> = {
  render: () => <Template first_name="Joshua" last_name="Alcorin" driver_type="Faculty" />,
};

export const StaffDriver: StoryObj<typeof RegistrationListCard> = {
  render: () => <Template first_name="Marj" last_name="Hojilla" driver_type="Staff" />,
};
