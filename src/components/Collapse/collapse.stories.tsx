import React from 'react'
import { Collapse } from './index'

export const ComCollapse = () => (
  <div>
    <div style={{ height: '400px' }}>
      <Collapse />
    </div>
  </div>
)

export default {
  title: '布局/Collapse',
  component: Collapse,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
