import React from 'react'
import { Divider } from './index'

export const ComDivider = () => (
  <div>
    <Divider>Align Center</Divider>
    <Divider align='left'>Align Left</Divider>
    <Divider align='right'>Align Right</Divider>
    <div className='m-text-16'>No Children</div>
    <Divider />
  </div>
)

export default {
  title: '布局/Divider',
  component: Divider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
