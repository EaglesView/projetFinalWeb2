const path = require('path');

module.exports = {
  entry: {
    index : './src/core/engine/engine.js',
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};