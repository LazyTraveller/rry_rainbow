import React from 'react'
import { Collapse } from './index'
import { observable } from 'mobx'
import { Button } from '../Button/index'
import { Box } from '../Box/index'

const store = observable({
  active: true,
  setActive() {
    this.active = !this.active
  },
})

export const ComCollapse = () => (
  <div>
    <Button onClick={() => store.setActive()} type='primary'>
      {store.active ? '收起' : '展开'}
    </Button>
    <Collapse active={store.active} className='m-margin-top-20'>
      <Box className='m-bg-info m-padding-20'>内容区域, 有内边距</Box>
    </Collapse>
  </div>
)

export default {
  title: '布局/Collapse',
  component: Collapse,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
