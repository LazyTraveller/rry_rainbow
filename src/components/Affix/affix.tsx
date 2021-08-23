import React, { FC, CSSProperties } from 'react';
import _ from 'lodash'
import { AffixProps } from './type'
import './style.less'

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
  return (
    <div className='b-affix' style={style}>
      {children}
    </div>
  );
}

export default Affix;