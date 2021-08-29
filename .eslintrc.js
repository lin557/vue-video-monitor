module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 配在这里 .prettierrc.js中就可以不用写了
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        // 是否使用分号结尾, 默认true
        semi: false,
        // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
        singleQuote: true,
        // 每行最多多少个字符换行
        printWidth: 80,
        // 行尾逗号,默认none,可选 none|es5|all
        // es5 包括es5中的数组、对象
        // all 包括函数对象等所有可选
        trailingComma: 'none'
      }
    ]
  }
}
