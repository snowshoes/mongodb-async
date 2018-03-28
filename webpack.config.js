const path = require('path');

const PATHS = {
  entry: path.join(__dirname, 'app/21-iterable-iterator/21.2-iterability.js'),
  output: path.join(__dirname, 'dist'),
  modulepath: path.join(__dirname, './node_modules')
};

module.exports = {
  entry: {
    app: PATHS.entry
  },
  output: {
    path: PATHS.output,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: PATHS.modulepath
      }
    ]
  }
};
