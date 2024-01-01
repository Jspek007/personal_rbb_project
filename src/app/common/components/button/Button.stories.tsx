import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonType: 'primary',
    children: (
      <>
        <span>Test Button</span>
      </>
    ),
  },
};
