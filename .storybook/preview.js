import React from 'react'
import { Observer } from 'mobx-react'
import { addDecorator, addParameters } from '@storybook/react'
import '../src/index.less' //👈 The app's CSS file goes here

console.warn('ggg', require('../src/components/Affix/style.less'))

addDecorator((storeFn) => (
  <React.Fragment>
    <Observer>{() => storeFn()}</Observer>
  </React.Fragment>
))

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
// export const decorators = [
//   (storeFn) => (
//     <React.Fragment>
//       <Observer>{() => storeFn()}</Observer>
//       {/* <LayoutRoot /> */}
//     </React.Fragment>
//   ),
// ]

console.warn('less')