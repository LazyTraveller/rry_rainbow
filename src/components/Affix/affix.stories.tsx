import React from 'react'
import { Affix } from './index'
import { observable, toJS } from 'mobx'
import _ from 'lodash'

const store = observable({
  data: [
    {
      value: 1,
      text: '南山',
    },
    {
      value: 2,
      text: '福田',
    },
    {
      value: 3,
      text: '罗湖',
    },
    {
      value: 4,
      text: '宝安',
    },
    {
      value: 5,
      text: '福永',
    },
  ],
})

export const ComAffix = () => (
  <div>
    <div style={{ height: '400px' }}>
      <Affix top={0}>
        <div style={{ backgroundColor: 'redxxx' }}>我会被钉住在顶部</div>
      </Affix>
    </div>
    {_.map(store.data, (item, index) => {
      return <div key={index}>{item.text}</div>
    })}

    <div style={{ height: '400px' }}>
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
