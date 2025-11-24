import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Input } from "../components";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Text",
    value: "",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Text",
    value: "",
    type: "password",
  },
};
