import type { Meta, StoryObj } from "@storybook/react";
import { PillButton } from "./PillButton";

const meta: Meta<typeof PillButton> = {
  title: "Components/Button/PillButton",
  component: PillButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    variant: "white",
    children: "PillButton",
  },
};
export const GreenBlue: Story = {
  args: {
    variant: "greenblue",
    children: "PillButton",
  },
};
