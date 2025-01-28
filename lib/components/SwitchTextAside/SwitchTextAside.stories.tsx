import type { Meta, StoryObj } from "@storybook/react";
import { SwitchTextAside } from "./SwitchTextAside.tsx";
const meta: Meta<typeof SwitchTextAside> = {
  title: "Components/Switch/SwitchTextAside",
  component: SwitchTextAside,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwitchTextAside>;

export const Default: Story = {
  args: {
    colorscheme: "basic",
    //@ts-ignore
    size: "md",
    text: "Hola",
    checked: false,
  },
};
