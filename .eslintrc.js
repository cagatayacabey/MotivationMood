module.exports = {
  env: {
    node: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // prevent eslint to complain about the "styles" variable being used before it was defined
    'no-use-before-define': ['error', { variables: false }],
    // ignore errors for the react-navigation package -- 0=off, 1=warn, 2=error
    'react/prop-types': ['off', { ignore: ['navigation', 'navigation.navigate'] }],

    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          map: [['@', './src']],
        },
      },
    },
  },
};
