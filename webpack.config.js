var path = require('path')
var webpack = require('webpack')
var PACKAGE = require('./package.json');
var buildVersion = PACKAGE.version;
var buildName = PACKAGE.name;
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var prodUrl = PACKAGE.production.url;



module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: buildName + '_' + buildVersion + '.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
//        options: {
//          loaders: {
//        	  i18n: '@kazupon/vue-i18n-loader'
//          }
          // other vue-loader options go here
 //       }
      },
        {
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: '@intlify/vue-i18n-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
     fallback: {
      zlib: false
    }
  },
  devServer: {
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
}
if (process.env.NODE_ENV === 'development') {
   module.exports.plugins = (module.exports.plugins || []).concat([
//    new webpack.DefinePlugin({
//      'process.env': 'development'
//    }),
    new VueLoaderPlugin()
  ])
  module.exports.mode = 'development'
	module.exports.output.filename='build.js'
}
if (process.env.NODE_ENV === 'production') {
   module.exports.plugins = (module.exports.plugins || []).concat([
    new VueLoaderPlugin()
  ])
  module.exports.mode = 'production'
  module.exports.devtool = 'source-map';
  module.exports.output.publicPath = prodUrl + '@' +buildVersion + '/dist/';
  //module.exports.output.publicPath= PACKAGE.url+ buildName +'/master/dist/';

  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
//    new webpack.optimize.UglifyJsPlugin({
//      sourceMap: true,
//      compress: {
//        warnings: false
//      }
//    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

