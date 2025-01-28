import type { Meta, StoryObj } from "@storybook/react";
import { HorizontalList } from "./HorizontalList";

const meta: Meta<typeof HorizontalList> = {
  title: "Components/Other/HorizontalList",
  component: HorizontalList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    validators: ["Moxie Validador", "Carlos Validador", "Santiago Validador"],
  },
};

export const CustomValidators: Story = {
  args: {
    validators: ["Validador A", "Validador B", "Validador C", "Validador D"],
  },
};
