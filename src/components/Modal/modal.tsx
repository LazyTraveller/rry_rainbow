import React, { FC, MouseEvent, useEffect, useRef, CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import SVGRemove from '../../svg/remove.svg'

type ModalSize = 'sm' | 'md' | 'lg' | 'xl'

interface ModalProps {
  title?: string
  size?: ModalSize
  onHide?(): void
  noCloseBtn?: boolean
  className?: string
  containerClassName?: string
  style?: CSSProperties
  children: ReactNode
}
const Modal: FC<ModalProps> = ({
  title,
  size,
  onHide,
  noCloseBtn,
  className,
  children,
  style,
  containerClassName,
}) => {
  const handleClose = (): void => {
    onHide && onHide()
  }
  const handleMask = (event: MouseEvent<HTMLDivElement>): void => {
    if ((event.target as HTMLDivElement).classList.contains('m-modal-wrap')) {
      handleClose()
    }
  }
  return (
    <div className={classNames('m-modal-container', containerClassName)}>
      <div className='m-modal-wrap' tabIndex={-1} onClick={handleMask}>
        <div
          className={classNames(
            'm-modal',
            'm-modal-' + size,
            {
              'm-modal-has-title': title,
            },
            className
          )}
          style={style}
        >
          {title && (
            <div className='m-modal-title-wrap'>
              <div className='m-modal-title'>{title}</div>
            </div>
          )}
          {noCloseBtn || (
            <div className='m-modal-close m-cursor' onClick={handleClose}>
              <SVGRemove />
            </div>
          )}
          <div className={classNames('m-modal-content', {})}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
