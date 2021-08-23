import React from 'react';
import { Divider } from './index'

export const ComAffix = () => (
  <div>
    <div style={{ height: '400px' }} >
    <Divider />
    </div>
  </div>
)

export default {
  title: '布局/Divider',
  component: Divider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}