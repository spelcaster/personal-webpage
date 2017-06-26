import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extractSass = new ExtractTextPlugin({
  filename: 'style/bundle.css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract(
          {
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ],
            // use style-loader in development
            fallback: 'style-loader'
          }
        )
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'standard-loader',
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    extractSass
  ]
}
