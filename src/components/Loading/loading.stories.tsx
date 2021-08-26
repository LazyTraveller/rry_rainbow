import React from 'react'
import { Flex } from 'components/Flex'
import { Loading } from './index'

export default {
  title: '反馈/Loading',
  component: Loading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const ComLoading = () => (
  <>
    <Flex column justifyCenter alignCenter>
      <Loading size='20px' tip='玩命加载中...' />
    </Flex>
    <Loading size='100px' />
    <Loading />
  </>
)
