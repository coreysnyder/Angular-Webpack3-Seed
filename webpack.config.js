var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = (ENV.indexOf('test') > -1); // lifecycle event contains 'test'
var isBuild = (ENV.indexOf('build') > -1); // lifecycle event contains 'build'
var publicPath = '/corey-app/';

/** Set defaults for config **/
var config = {
  sourcemaps: !isBuild, // sourcemaps default to false when building, default to true o/w
  uglify: isBuild // uglify default to true when building, default to false o/w
};
/** Read environment config **/
readConfigFromEnv('sourcemaps', process.env.SOURCEMAPS);
readConfigFromEnv('uglify', process.env.UGLIFY);

function readConfigFromEnv(configName, envValue) {
  if (envValue !== undefined) {
    config[configName] = !!envValue;
  }
};

function getSourcemapOption() {
  if (!config.sourcemaps) {
    return false
  } else if (isTest) {
    // As currently configured, Karma only understands sourcemaps if they're inline
    return 'cheap-inline-source-map';
  } else if (isBuild) {
    return 'source-map';
  } else {
    return 'inline-source-map';
  }
};

function getPlugins() {
  if (isTest) {
    return [];
  };

  var plugins = [

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', filename: 'vendor.bundle.js'
    }),

    new HtmlWebpackPlugin({
      title: 'Aver | Corey App',
      template: "index.ejs",
      hash: true,
      publicPath: publicPath
    })

  ];

  if (config.uglify) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: config.sourcemaps,
      compress: {warnings: false}
    }));
  };

  return plugins;
};

module.exports = {

  context: __dirname + '/app',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'ng-annotate-loader',
            options: { add: true, single_quotes: true }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [ 'ngtemplate-loader', 'html-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 100000 }
          }
        ]
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 100000 }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: "file-loader",
            options: { name: '[name].[ext]' }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10000, mimetype:'application/font-woff' }
          }
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10000, mimetype: 'application/octet-stream' }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10000, mimetype: 'image/svg+xml' }
          }
        ]
      }
    ]
  },

  devtool: getSourcemapOption(),

  entry: isTest ? {
      app: ['./app.js']
    } : {
    app: ['./app.js'],
    vendor: [
      'angular',
      'angular-ui-bootstrap',
      'underscore',
      './app.less'
    ]
  },

  output: isTest ? {} : {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    publicPath: publicPath
  },

  plugins: getPlugins(),

  resolve: {
    modules: [
      path.resolve(__dirname, './app'),
      "node_modules"
    ]
  },

  devServer: {
    contentBase: './dist',
    hot: false,
    historyApiFallback: true
  }
};
