module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@templates': './src/components/templates',
          '@pages': './src/components/pages',
          '@src': './src',
        },
      },
    ],
  ],
};
