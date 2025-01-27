import type { Meta, StoryObj } from "@storybook/react";
import { DeleteButton } from "./DeleteButton";

const meta: Meta<typeof DeleteButton> = {
  title: "Components/DeleteButton",
  component: DeleteButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {};
