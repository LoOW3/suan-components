import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/Button/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Chat: Story = {
  args: {
    iconColor: "green",
  },
};

export const Upload: Story = {
  args: {
    iconColor: "white",
    iconType: "upload",
  },
};

export const Save: Story = {
  args: {
    iconColor: "white",
    iconType: "save",
  },
};
