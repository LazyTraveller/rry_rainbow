import React, { FC, CSSProperties }  from 'react';
import './button.less';

interface ButtonProps {
  type?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  style?: CSSProperties
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({children, type ='primary', size = 'medium', style, ...props }) => {
  const mode = type === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}
