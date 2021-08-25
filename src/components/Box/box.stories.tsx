import React from 'react'
import { Box, BoxTable } from './index'

export const ComBox = () => (
  <div>
    <Box className='m-border m-margin-bottom-20'>内容区域</Box>
    <Box className='m-bg-primary m-padding-20'>内容区域, 有内边距</Box>
  </div>
)

export default {
  title: '布局/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const ComBoxTable = () => (
  <div>
    <BoxTable />
  </div>
)
