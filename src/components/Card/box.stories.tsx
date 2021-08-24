import React from 'react'
import { Card } from './index'

export const ComCard = () => (
  <div>
    <div style={{ height: '400px' }}>
      <Card />
    </div>
  </div>
)

export default {
  title: '布局/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
