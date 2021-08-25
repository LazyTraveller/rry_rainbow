import React, {
  FC,
  CSSProperties,
  AnchorHTMLAttributes,
  MouseEvent,
  useState,
} from 'react'
import _, { isPlainObject } from 'lodash'
import classNames from 'classnames'
import is from '../../common/tool'
import './button.less'

type ButtonType = 'default' | 'primary' | 'success' | 'danger' | 'link'
type ButtonSize = 'small' | 'middle' | 'large'
type ButtonHTMLType = 'submit' | 'button' | 'reset'

interface ButtonProps
  extends AnchorHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  type?: ButtonType
  size?: ButtonSize
  htmlType?: ButtonHTMLType
  loading?: boolean
  href?: string
  plain?: boolean
  block?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  style?: CSSProperties
}

export const Button: FC<ButtonProps> = ({
  type = 'primary',
  size = 'middle',
  htmlType = 'button',
  disabled,
  plain,
  onClick = _.noop,
  loading,
  block,
  href,
  className,
  style,
  children,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const loadFlag = loading || isLoading
  const handleClick = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    if (loadFlag) {
      return
    }
    const result = onClick(event)
    if (!is.promise(result)) {
      return
    }
    setIsLoading(true)
    Promise.resolve(result).finally(() => {
      setIsLoading(false)
    })
  }

  const Div = type === 'link' && href ? 'a' : 'button'
  return (
    <Div
      {...rest}
      type={htmlType}
      href={href}
      className={classNames(
        `m-btn m-btn-${type}`,
        {
          'm-btn-block': block,
          [`m-btn-${size}`]: size,
          'm-btn-plain': type !== 'link' && plain,
        },
        className
      )}
      disabled={loadFlag || disabled}
      onClick={handleClick}
      style={style}
    >
      {/* {loadFlag && <} */}
      {children}
    </Div>
  )
}
