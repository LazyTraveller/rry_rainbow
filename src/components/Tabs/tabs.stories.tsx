import React from 'react'
import { Tabs } from './index'

export const ComTabs = () => (
  <div>
    <div style={{ height: '400px' }}>
      <Tabs />
    </div>
  </div>
)

export default {
  title: '布局/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
