import React from 'react'
import Input from './index'

export default {
  title: '表单/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const ComInput = () => <Input />
