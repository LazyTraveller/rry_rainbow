import React from 'react';
import { Affix } from './index'

export const ComAffix = () => (
  <div>
    <div style={{ height: '400px' }} >
    <Affix top={0}>
      <div style={{ backgroundColor: 'red' }}>我会被钉住在顶部</div>
    </Affix>
    </div>
    
    <div style={{ height: '400px' }} >
    <Affix bottom={0}>
      <div style={{ backgroundColor: 'red' }}>我会被钉住在底部</div>
    </Affix>
    </div>
  </div>
)

export default {
  title: '布局/Affix',
  component: Affix,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}