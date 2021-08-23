import React from 'react';
import { Nav } from './index'

export const ComNav = () => (
  <div>
    <div style={{ height: '400px' }} >
    <Nav />
    </div>
  </div>
)

export default {
  title: '布局/Nav',
  component: Nav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}