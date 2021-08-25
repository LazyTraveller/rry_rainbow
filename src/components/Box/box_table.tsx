import React, { FC, ReactNode, CSSProperties } from 'react'
import classNames from 'classnames'

interface BoxTableProps {
  info?: ReactNode
  action?: ReactNode
  className?: string
  style?: CSSProperties
  // headerProps?: FlexProps
}

const BoxTable: FC<BoxTableProps> = ({ info, action, children, className, ...rest }) => {
  return (
    <div {...rest} className={classNames(className)}>
      {children}
    </div>
  )
}

export default BoxTable
