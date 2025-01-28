import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"], // Opciones disponibles
      control: { type: "radio" },
    },
    icon: {
      options: [
        "",
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>,
      ],
      control: {
        labels: {
          null: "",
          plus: "plus",
        },
      },
      table: {
        category: "Icons",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonOutlineIcon: Story = {
  args: {
    children: "Más acciones",
    size: "sm",
    model: "model2",
    colorscheme: "model1",
    variant: "outline",
    reverse: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
    ),
  },
};

export const ButtonSolidIcon: Story = {
  args: {
    children: "Ver Proyectos",
    size: "sm",
    model: "model2",
    colorscheme: "model1",
    variant: "solid",
    reverse: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
    ),
  },
};

export const ButtonSolid: Story = {
  args: {
    children: "Ver Proyectos",
    size: "sm",
    model: "model2",
    colorscheme: "model1",
    variant: "solid",
  },
};

export const ButtonSolidNav: Story = {
  args: {
    children: "Ver Proyectos",
    size: "sm",
    model: "model1",
    colorscheme: "model2",
    variant: "solid",
    shadow: "md",
  },
};

export const ButtonSolidNav2: Story = {
  args: {
    children: "Ver Proyectos",
    size: "sm",
    model: "model1",
    colorscheme: "model3",
    variant: "solid",
    shadow: "md",
  },
};
