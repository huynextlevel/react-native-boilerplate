/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const jsoMetroPlugin = require('obfuscator-io-metro-plugin')({
  // for these option look javascript-obfuscator library options from  above url
  compact: false,
  sourceMap: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  numbersToExpressions: true,
  simplify: true,
  shuffleStringArray: true,
  splitStrings: true,
  stringArrayThreshold: 1
})

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  ...jsoMetroPlugin
};
