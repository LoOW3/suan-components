import type { Meta, StoryObj } from "@storybook/react";
import { SwitchText } from "./SwitchText.tsx";
const meta: Meta<typeof SwitchText> = {
  title: "Components/Switch/SwitchText",
  component: SwitchText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwitchText>;

export const Default: Story = {
  args: {
    colorscheme: "basic",
    //@ts-ignore
    size: "md",
  },
};
