import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Smith',
    size: 'xs',
    shape: 'circle',
  },
};
