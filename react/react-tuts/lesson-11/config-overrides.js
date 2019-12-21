// module.exports = (config) => {
//   // 如果没有使用customize-cra，就在这里可以对config进行配置
//   return config
// }

const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy()
)