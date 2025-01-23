import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch.tsx";
const meta: Meta<typeof Switch> = {
  title: "Components/Switch/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    colorscheme: "basic",
    //@ts-ignore
    size: "md",
  },
};
export const Danger: Story = {
  args: {
    colorscheme: "danger",
    //@ts-ignore
    size: "md",
  },
};
