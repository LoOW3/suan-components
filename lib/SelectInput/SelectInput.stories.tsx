import type { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from "./SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Components/SelectInput",
  component: SelectInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {
    //@ts-ignore
    size: "md",
    options: [
      { label: "option 1", value: 1 },
      { label: "option 2", value: 2 },
      { label: "option 3", value: 3 },
    ],
  },
};
