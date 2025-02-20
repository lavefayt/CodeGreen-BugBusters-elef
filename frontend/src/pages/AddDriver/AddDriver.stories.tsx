import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import AddDriver from "./AddDriver";

export default {
  title: "Pages/AddDriver",
  component: AddDriver,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as ComponentMeta<typeof AddDriver>;

const Template: ComponentStory<typeof AddDriver> = (args) => <AddDriver {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FilledState = Template.bind({});
FilledState.args = {
  initialValues: {
    name: "Love Faith Alcorin",
    licenseNumber: "MEH123",
    phone: "09996829541",
  },
};

export const SubmissionError = Template.bind({});
SubmissionError.args = {
  initialValues: {
    name: "",
    licenseNumber: "",
    phone: "",
  },
  showError: true,
};
