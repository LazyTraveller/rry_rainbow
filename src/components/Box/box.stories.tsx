import React from 'react'
import { Box } from './index'

export const ComBox = () => (
  <div>
    <div style={{ height: '400px' }}>
      <Box />
    </div>
  </div>
)

export default {
  title: '布局/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
