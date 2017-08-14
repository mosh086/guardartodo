var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'client/app/app.js')
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.join(__dirname, '/dist/'),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
       { test: /\.css$/, loader: 'style!css' },
       { test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=100000' },
       { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      "window.jQuery": 'jquery',
      "windows.jQuery": 'jquery',
      "Tether": 'tether',
      "window.Tether": 'tether'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    }),
    new CopyWebpackPlugin([
      { from: 'client/app/app.config.json', to: 'app.config.json' },
      { from: 'client/images', to: 'images'},
      { from: 'client/fonts', to: 'fonts'}
    ])
  ],
  resolve: {
    extensions: ['', '.js', '.css'],
    alias: {
      "scrollTo": path.resolve(
        __dirname,
        "node_modules/jquery.scrollto/jquery.scrollTo.min"
      ),
      "waypoints": path.resolve(
        __dirname,
        "node_modules/waypoints/lib/jquery.waypoints.min"
      ),
      "pdfMake": path.resolve(
        __dirname,
        "node_modules/pdfmake/build/pdfmake.min"
      ),
      "vfs_fonts": path.resolve(
        __dirname,
        "node_modules/pdfmake/build/vfs_fonts"
      ),
      "chart": path.resolve(
        __dirname,
        "node_modules/chart.js/src/chart.js"
      )
    }
  }
};
