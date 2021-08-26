import React, { HTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import './style.less'
interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  flex?: number | boolean
  /** 本身是 display:flex，flex 会使子元素 flex-item。设置 block 即可 */
  block?: boolean
  auto?: boolean
  /** flex 会坍缩，提供 none 则不会坍缩 */
  none?: boolean
  width?: string
  height?: string
  row?: boolean
  column?: boolean
  wrap?: boolean
  nowrap?: boolean
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifyBetween?: boolean
  justifyAround?: boolean
  alignStart?: boolean
  alignEnd?: boolean
  alignCenter?: boolean
  alignBaseline?: boolean
  alignStretch?: boolean
  alignContentStart?: boolean
  alignContentEnd?: boolean
  alignContentCenter?: boolean
  alignContentBetween?: boolean
  alignContentAround?: boolean
  alignContentStretch?: boolean
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    flex,
    block,

    auto,
    none,
    width,
    height,

    row,
    column,

    wrap,
    nowrap,

    justifyStart,
    justifyEnd,
    justifyCenter,
    justifyBetween,
    justifyAround,

    alignStart,
    alignEnd,
    alignCenter,
    alignBaseline,
    alignStretch,

    alignContentStart,
    alignContentEnd,
    alignContentCenter,
    alignContentBetween,
    alignContentAround,
    alignContentStretch,

    className,
    style,
    children,

    ...rest
  } = props
  const cn = classNames(
    {
      'm-flex': true,
      'm-flex-block': block,

      'm-flex-flex': flex,
      'm-flex-auto': auto,
      'm-flex-none': none || width || height,

      'm-flex-row': row,
      'm-flex-column': column,

      'm-flex-wrap': wrap,
      'm-flex-nowrap': nowrap,

      'm-flex-justify-start': justifyStart,
      'm-flex-justify-end': justifyEnd,
      'm-flex-justify-center': justifyCenter,
      'm-flex-justify-between': justifyBetween,
      'm-flex-justify-around': justifyAround,

      'm-flex-align-start': alignStart,
      'm-flex-align-end': alignEnd,
      'm-flex-align-center': alignCenter,
      'm-flex-align-baseline': alignBaseline,
      'm-flex-align-stretch': alignStretch,

      'm-flex-align-content-start': alignContentStart,
      'm-flex-align-content-end': alignContentEnd,
      'm-flex-align-content-center': alignContentCenter,
      'm-flex-align-content-between': alignContentBetween,
      'm-flex-align-content-around': alignContentAround,
      'm-flex-align-content-stretch': alignContentStretch,
    },
    className
  )
  const s = Object.assign({}, style)
  if (flex) {
    s.flex = typeof flex === 'boolean' ? 1 : flex
    s.WebkitFlex = typeof flex === 'boolean' ? 1 : flex
  }
  if (height) {
    s.height = height
  }
  if (width) {
    s.width = width
  }

  return (
    <div ref={ref} {...rest} className={cn} style={s}>
      {children}
    </div>
  )
})

export default Flex
export type { FlexProps }
