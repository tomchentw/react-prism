import {
  resolve as resolvePath,
} from "path";

import {
  default as webpack,
} from "webpack";

let FILENAME_FORMAT;
let PRODUCTION_PLUGINS;

if (process.env.NODE_ENV === `production`) {
  FILENAME_FORMAT = `[name]-[chunkhash].js`;
  PRODUCTION_PLUGINS = [
    // Same effect as webpack -p
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  // When HMR is enabled, chunkhash cannot be used.
  FILENAME_FORMAT = `[name].js`;
  PRODUCTION_PLUGINS = [];
}

export default {
  output: {
    path: resolvePath(__dirname, `../../public/assets`),
    pathinfo: process.env.NODE_ENV !== `production`,
    publicPath: `assets/`,
    filename: FILENAME_FORMAT,
  },
  target: `webworker`,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: `null`,
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: `babel`,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(`NODE_ENV`),
    ...PRODUCTION_PLUGINS,
  ],
};
