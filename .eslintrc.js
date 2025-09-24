// module.exports = {
//   root: true,
//   extends: [
//     '@react-native-community',
//     'eslint:recommended',
//     'plugin:prettier/recommended',
//   ],
//   plugins: ['react', 'react-native', 'react-hooks'],
//   rules: {
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//     'react-native/no-unused-styles': 'error',
//     'react-native/split-platform-components': 'error',
//     'react-native/no-inline-styles': 'warn',
//     'react-native/no-color-literals': 'warn',
//     'no-console': 'warn',
//     'no-unused-vars': 'error',
//     'prefer-const': 'error',
//   },
//   env: {
//     'react-native/react-native': true,
//     jest: true,
//   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     requireConfigFile: true,
//     ecmaFeatures: {jsx: true},
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
// };

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'prefer-const': 'error',
  },
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {jsx: true},
    ecmaVersion: 2018,
    sourceType: 'module',
    babelOptions: {
      presets: ['@react-native/babel-preset'],
    },
  },
};
