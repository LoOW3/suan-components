import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGreen } from "./ButtonGreen";

const meta: Meta<typeof ButtonGreen> = {
  title: "Components/ButtonGreen",
  component: ButtonGreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "Button",
    size: "sm"
  },
};
