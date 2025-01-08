export default {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        unitPrecision: 3,
        propList: ['*'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      }
    }
  }
  