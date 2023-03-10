module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: './tsconfig.json',
    // ecmaVersion: 2021,
    // sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    // project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: [
    // 'react',
    // '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended'
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    // 'airbnb',
  ],
  rules: {
    // 换行符风格
    'linebreak-style': ['error', 'unix'],
    // 缩进风格
    indent: ['error', 2, { SwitchCase: 1 }],
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 禁止行尾有空格
    'no-trailing-spaces': 'error',
    // 禁止使用console
    'no-console': 'error',
    // 禁止使用未声明的变量
    'no-undef': 'error',
    // 函数括号前需要加空格
    // 'space-before-function-paren': ['error', 'always'],
    // 禁用变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // 允许使用 require()
    '@typescript-eslint/no-var-requires': 'off',
    // 允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 允许类成员之间有空行
    'lines-between-class-members': 'off',
    // 允许使用特定的文件扩展名
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     ts: 'never',
    //     tsx: 'never',
    //     js: 'never',
    //     jsx: 'never',
    //   },
    // ],
    // 禁止使用默认导出
    'import/prefer-default-export': 'off',
    // 允许使用 PropTypes
    'react/prop-types': 'off',
    // 允许在组件定义中使用无状态组件
    'react/prefer-stateless-function': 'off',
    // 允许在 jsx 中使用 bind
    'react/jsx-no-bind': 'off',
    // 允许在 .js 和 .jsx 文件中使用文件名作为默认导出
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-use-before-define': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
