import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  hasGap?: boolean
}
const Box: FC<BoxProps> = (props) => {
  const { hasGap, className, children, ...rest } = props
  return (
    <div {...rest} className={classNames('gm-box', className)}>
      {children}
    </div>
  )
}

export default Box
