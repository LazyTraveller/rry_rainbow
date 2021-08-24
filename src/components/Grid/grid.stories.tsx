import React from 'react'
import { Grid } from './index'

export const ComGrid = () => (
  <div>
    <div style={{ height: '400px' }}>
      <Grid />
    </div>
  </div>
)

export default {
  title: '布局/Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
