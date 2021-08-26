import React, { FC } from 'react'
import './style.less'
import { Flex } from '../Flex'

interface LoadingProps {
  size?: string
  tip?: string
}
const Loading: FC<LoadingProps> = ({ size = '50px', tip }) => {
  return (
    <>
      <svg
        className='m-loading'
        style={{
          width: size,
          height: size,
        }}
        viewBox='0 0 50 50'
      >
        <circle className='m-loading-path' cx='25' cy='25' r='20' fill='none' />
      </svg>
      {tip && (
        <div className='m-text-12 m-text-primary m-margin-top-5'>
          {tip || '加载中...'}
        </div>
      )}
    </>
  )
}

export default Loading
