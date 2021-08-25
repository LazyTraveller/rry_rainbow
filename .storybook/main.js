const webpackFinal = (config) => {

  config.module.rules.push({
    test: /\.(tsx)?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")],
        },
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("node_modules");
            }
            return true;
          },
        },
      },
    ],
    exclude: /node_modules/
  });

  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
      },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {},
        },
      },
      {
        loader: 'less-loader',
        options: {
          importLoaders: 2,
      },
      },
     
    ],
    exclude: /\.module\.less$/
  })

  console.warn('config', config)
  config.resolve.extensions.push('js','.ts', '.tsx')

  return config
}

module.exports = {
 
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions/register",
    "@storybook/addon-essentials",
   {
     name: "@storybook/preset-create-react-app",
     options: {
       craOverrides: {
         fileLoaderExcludes: ['less']
       }
     }
   }
  ],
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  webpackFinal,
}