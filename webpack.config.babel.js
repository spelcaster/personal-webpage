import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extractSass = new ExtractTextPlugin({
  filename: 'style/bundle.css',
  disable: process.env.NODE_ENV === 'development'
})

const rules = {
  sass: {
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
  fonts: {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]'

  },
  jsLint: {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'standard-loader',
    options: {
      parser: 'babel-eslint'
    }
  },
  jsTranspile: {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: ['react', 'es2015', 'stage-0']
      }
    }
  }
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      rules.sass,
      rules.fonts,
      rules.jsLint,
      rules.jsTranspile
    ]
  },
  plugins: [
    extractSass
  ]
}
