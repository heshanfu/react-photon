const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'react-photon.js',
      library: 'ReactPhoton',
      libraryTarget: 'umd'
    },
    externals: {
      classnames: 'classnames',
      react: 'react',
      'react-dom': 'react-dom',
      '@feizheng/noop': '@feizheng/noop',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types',
      '@feizheng/react-list': '@feizheng/react-list'
    },
    plugins: [new CleanWebpackPlugin()]
  });
};
