import type { Meta, StoryObj } from "@storybook/react";
import { MenuBar } from "./MenuBar";

const ClockHourIcon = (
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
    className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-10"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 12l-3 -2" />
    <path d="M12 7v5" />
  </svg>
);

const meta: Meta<typeof MenuBar> = {
  title: "Components/MenuBar",
  component: MenuBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Detalles", onClick: () => alert("Detalles clicked") },
      {
        label: "Validación",
        icon: ClockHourIcon,
        onClick: () => alert("Validación clicked"),
      },
      {
        label: "Sistema de datos",
        onClick: () => alert("Sistema de datos clicked"),
      },
      {
        label: "Configuración",
        onClick: () => alert("Configuración clicked"),
      },
    ],
  },
};

export const CustomMenu: Story = {
  args: {
    items: [
      { label: "Inicio", onClick: () => alert("Inicio clicked") },
      {
        label: "Proyectos",
        icon: ClockHourIcon,
        onClick: () => alert("Proyectos clicked"),
      },
      { label: "Reportes", onClick: () => alert("Reportes clicked") },
    ],
  },
};
