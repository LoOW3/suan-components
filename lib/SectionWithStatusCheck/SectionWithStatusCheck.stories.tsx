import type { Meta, StoryObj } from "@storybook/react";
import { SectionWithStatusCheck } from "./SectionWithStatusCheck.tsx";
const meta: Meta<typeof SectionWithStatusCheck> = {
  title: "Components/Other/SectionWithStatusCheck",
  component: SectionWithStatusCheck,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionWithStatusCheck>;

export const Default: Story = {
  args: {
    text: "Confirmado",
    checked: false,
  },
};
