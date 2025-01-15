import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch.tsx";
const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  /* args: {
    checkedColor: "#34c759",
    uncheckedColor: "#ccc,",
  }, */
};
export const V2: Story = {
  /* args: {
    checkedColor: "#FF5733",
    uncheckedColor: "#b0b0b0",
  }, */
};
