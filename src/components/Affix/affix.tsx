import React, { FC, CSSProperties } from 'react'
import _ from 'lodash'
import { AffixProps } from './type'

const Affix: FC<AffixProps> = ({ children, top, bottom }) => {
  const style: CSSProperties = {
    position: 'sticky',
    zIndex: 950,
  }

  if (!_.isNil(top)) {
    style.top = `${top}px`
  }
  if (!_.isNil(bottom)) {
    style.bottom = `${bottom}px`
  }
  return <div className='he-affix'>{children}</div>
}

export default Affix
