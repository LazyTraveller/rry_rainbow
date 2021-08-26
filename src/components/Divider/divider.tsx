import React, { FC } from 'react'
import { Flex } from '../Flex'
import './style.less'
interface DividerProps {
  align?: 'left' | 'center' | 'right'
}
const Divider: FC<DividerProps> = ({ align = 'center', children }) => {
  return (
    <Flex className={`m-divider m-divider-${align}`}>
      <Flex flex className='m-divider-line' />
      {children && (
        <div className='m-padding-lr-10'>
          {typeof children === 'string' ? (
            <span className='m-text-16'>{children}</span>
          ) : (
            children
          )}
        </div>
      )}

      <Flex flex className='m-divider-line' />
    </Flex>
  )
}

export default Divider
export type { DividerProps }
