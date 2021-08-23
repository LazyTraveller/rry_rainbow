import React from 'react'
import { Observer } from 'mobx-react'
import './style.less' //👈 The app's CSS file goes here

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// 响应 mobx
export const decorators = [
  (storeFn) => (
    <React.Fragment>
      <Observer>{() => storeFn()}</Observer>
      {/* <LayoutRoot /> */}
    </React.Fragment>
  ),
]

console.warn('less')