import React, { FC } from 'react'
import { Flex } from './index'
import classNames from 'classnames'

interface CircleProps {
  text: number
  className?: string
}

const Circle: FC<CircleProps> = ({ text, className }) => {
  return (
    <Flex
      justifyCenter
      alignCenter
      style={{ width: 50, height: 50, borderRadius: '50%' }}
      className={classNames('m-bg-primary m-text-16 m-text-white', className)}
    >
      {text}
    </Flex>
  )
}

const style = {
  width: 200,
  height: 200,
}
const cn = 'm-border m-margin-top-20 m-margin-left-20'

export const ComFlex = () => (
  <Flex wrap justifyStart>
    <Flex justifyCenter alignCenter className={cn} style={style}>
      {[1].map((it, index) => {
        return <Circle text={it} key={index} />
      })}
    </Flex>
    <Flex justifyAround alignCenter className={cn} style={style}>
      {[1, 2].map((it, index) => {
        return <Circle text={it} key={index} />
      })}
    </Flex>
    <Flex column justifyAround className={cn} style={style}>
      <Flex justifyStart>
        <Circle text={1} className='m-margin-left-10' />
      </Flex>
      <Flex justifyCenter>
        <Circle text={2} />
      </Flex>
      <Flex justifyEnd>
        <Circle text={3} className='m-margin-right-10' />
      </Flex>
    </Flex>
    <Flex column justifyAround className={cn} style={style}>
      <Flex justifyAround>
        {[1, 2].map((it, index) => {
          return <Circle text={it} key={index} />
        })}
      </Flex>
      <Flex justifyAround>
        {[3, 4].map((it, index) => {
          return <Circle text={it} key={index} />
        })}
      </Flex>
    </Flex>
    <Flex column justifyAround className={cn} style={style}>
      <Flex justifyAround>
        {[1, 2].map((it, index) => {
          return <Circle text={it} key={index} />
        })}
      </Flex>
      <Flex justifyCenter>
        <Circle text={5} />
      </Flex>
      <Flex justifyAround>
        {[3, 4].map((it, index) => {
          return <Circle text={it} key={index} />
        })}
      </Flex>
    </Flex>
    <Flex column justifyAround className={cn} style={style}>
      <Flex justifyAround>
        {[1, 2].map((it, index) => {
          return <Circle text={it} key={index} />
        })}
      </Flex>
      <Flex justifyAround>
        {[3, 4].map((it, index) => {
          return <Circle text={it} key={index} />
        })}
      </Flex>
      <Flex justifyAround>
        {[5, 6].map((it, index) => {
          return <Circle text={it} key={index} />
        })}
      </Flex>
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
