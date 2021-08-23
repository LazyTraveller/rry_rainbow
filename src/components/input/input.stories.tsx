import React from 'react';
import Input from './index'

export default {
  title: '表单/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};