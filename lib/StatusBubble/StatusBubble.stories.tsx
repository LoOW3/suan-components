import type { Meta, StoryObj } from "@storybook/react";
import { StatusBubble } from "./StatusBubble";

const meta: Meta<typeof StatusBubble> = {
  title: "Components/StatusBubble",
  component: StatusBubble,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"], // Opciones disponibles
      control: { type: "radio" },
    },
    color: {
      options: ["black", "green"], // Opciones disponibles
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StatusBubble>;

export const Default: Story = {
  args: {
    text: "En Prefactibilidad",
    color: "green",
  },
};

export const CustomText: Story = {
  args: {
    text: "En Proceso",
  },
};
