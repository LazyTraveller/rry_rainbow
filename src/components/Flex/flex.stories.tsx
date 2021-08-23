import React from 'react';
import { Flex } from './index'

export const ComAffix = () => (
  <div>
    <div style={{ height: '400px' }} >
    <Flex />
    </div>
  </div>
)

export default {
  title: '布局/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}