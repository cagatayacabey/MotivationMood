module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    // CAUTION Reanimated plugin has to be listed last.
    // 'react-native-reanimated/plugin',
  ],
};
