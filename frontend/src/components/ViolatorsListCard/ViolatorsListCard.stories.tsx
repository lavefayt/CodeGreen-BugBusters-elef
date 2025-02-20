import type { Meta, StoryObj } from "@storybook/react";
import ViolatorsListCard from "./ViolatorsListCard";

export default {
  title: "Components/ViolatorsListCard",
  component: ViolatorsListCard,
  argTypes: {
    first_name: { control: "text" },
    last_name: { control: "text" },
    driver_type: { control: "text" },
    license_number: { control: "text" },
    violations: { control: "array" },
  },
} satisfies Meta<typeof ViolatorsListCard>;

type Story = StoryObj<typeof ViolatorsListCard>;

export const Default: Story = {
  args: {
    first_name: "John",
    last_name: "Doe",
    driver_type: "Student",
    license_number: "XYZ-123",
  },
};

export const NoViolations: Story = {
  args: {
    first_name: "Jane",
    last_name: "Smith",
    driver_type: "Non-Professional",
    license_number: "ABC-456",
    violations: [],
  },
};
