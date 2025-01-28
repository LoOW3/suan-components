import type { Meta, StoryObj } from "@storybook/react";
import { DaysLeft } from "./DaysLeft";

const meta: Meta<typeof DaysLeft> = {
  title: "Components/Other/DaysLeft",
  component: DaysLeft,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {},
};
