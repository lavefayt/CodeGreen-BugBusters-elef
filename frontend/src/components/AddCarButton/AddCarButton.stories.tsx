import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AddCarButton from "./AddCarButton";
import { DriverWithVandC } from "../../types/datatypes";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/AddCarButton",
  component: AddCarButton,
  decorators: [(Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )], // Ensuring routing works
} as Meta<typeof AddCarButton>;

// Mock driver data
const mockDriver: DriverWithVandC = {
  id: "123",
  license_number: "XYZ-456",
  vehicles: [],
  violations: [],
};

const Template = ({
  activeSection,
  driver,
  initialModalState = false, 
}: {
  activeSection: string;
  driver: DriverWithVandC;
  initialModalState?: boolean;
}) => {
  const [vehicleModalActive, setVehicleModalActive] = useState(initialModalState);
  
  return (
    <AddCarButton
      activeSection={activeSection}
      driver={driver}
      vehicleModalActive={vehicleModalActive}
      setVehicleModalActive={setVehicleModalActive}
    />
  );
};

export const DefaultState: StoryObj<typeof AddCarButton> = {
  render: () => <Template activeSection="vehicle" driver={mockDriver} />,
};

export const ModalOpen: StoryObj<typeof AddCarButton> = {
  render: () => <Template activeSection="vehicle" driver={mockDriver} initialModalState={true} />,
};

export const InactiveState: StoryObj<typeof AddCarButton> = {
  render: () => <Template activeSection="driver" driver={mockDriver} />,
};
