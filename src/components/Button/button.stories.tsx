import React from 'react'
import { Button } from './Button'

export const ComButton = () => (
  <div>
    <Button>Button</Button>
    <Button size='large'>Button</Button>
    <Button size='small'>Button</Button>
  </div>
)

export default {
  title: '布局/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
