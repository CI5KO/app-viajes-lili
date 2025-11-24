import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Switch } from "../components";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onToggle: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    IconOn: "x",
    IconOff: "y",
    isOn: true,
  },
};
