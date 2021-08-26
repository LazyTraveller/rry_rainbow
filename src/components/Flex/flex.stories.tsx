import React from 'react'
import { Flex } from './index'

const style = { width: 80, height: 80, borderRadius: '50%' }
export const ComFlex = () => (
  <Flex wrap justifyAround>
    <Flex
      justifyCenter
      alignCenter
      className='m-border m-margin-top-20'
      height='400px'
      width='400px'
    >
      {[1].map((it, index) => {
        return (
          <Flex
            justifyCenter
            alignCenter
            key={index}
            style={style}
            className='m-bg-primary'
          >
            {it}
          </Flex>
        )
      })}
    </Flex>
    <Flex
      justifyAround
      alignCenter
      className='m-border m-margin-top-20'
      height='400px'
      width='400px'
    >
      {[1, 2].map((it, index) => {
        return (
          <Flex
            justifyCenter
            alignCenter
            key={index}
            style={style}
            className='m-bg-primary'
          >
            {it}
          </Flex>
        )
      })}
    </Flex>
    <Flex
      column
      justifyAround
      alignCenter
      className='m-border m-margin-top-20'
      height='400px'
      width='400px'
    >
      {[1, 2, 3].map((it, index) => {
        return (
          <Flex
            justifyCenter
            alignCenter
            key={index}
            style={style}
            className='m-bg-primary'
          >
            {it}
          </Flex>
        )
      })}
    </Flex>
    <Flex justifyAround className='m-border m-margin-top-20' height='400px' width='400px'>
      {[1, 2, 3].map((it, index) => {
        return (
          <Flex
            justifyCenter
            alignCenter
            key={index}
            style={style}
            className='m-bg-primary m-margin-top-20'
          >
            {it}
          </Flex>
        )
      })}
    </Flex>
  </Flex>
)

export default {
  title: '布局/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
