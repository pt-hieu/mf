const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('../package.json').dependencies;

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        common: 'common@http://localhost:2999/remoteEntry.js',
        home: 'home@http://localhost:3001/remoteEntry.js',
        events: 'events@http://localhost:3002/remoteEntry.js',
        hrm: 'hrm@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: '^17.0.0',
        },
      },
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'index.[contentHash].js',
    publicPath: 'auto',
  },
};
