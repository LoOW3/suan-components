import type { Meta, StoryObj } from "@storybook/react";
import { SwitchProjectVisibility } from "./SwitchProjectVisibility.tsx";
const meta: Meta<typeof SwitchProjectVisibility> = {
  title: "Components/Switch/SwitchProjectVisibility",
  component: SwitchProjectVisibility,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwitchProjectVisibility>;

export const Default: Story = {
  args: {
    colorscheme: "basic",
    //@ts-ignore
    size: "md",
  },
};
