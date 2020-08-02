module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-classname-to-dynamic-style",
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          actions: './src/services/redux/actions',
          reducers: './src/services/redux/reducers',
          constants: './src/data/constants',
          containers: './src/client/containers',
          components: './src/client/components',
          controller: './src/controller',
          images: './src/presentation/ressources/assets/imageAll',
          styles: './src/presentation/ressources/styles',
          config: './src/data/config',
          services: './src/client/services',
          applicatif: './src/client/services/applicatif',
          bdl: './src/client/services/bdl',
          technique: './src/services/technique',
          mapDispatchToProps: './src/client/services/redux/mapDispatchToProps',
          mapStateToProps: './src/client/services/redux/mapStateToProps',
          css: './src/client/ressources/css/',
          models: './src/data/models',
          themes: './src/presentation/ressources/styles/theme',
          langues: './src/presentation/ressources/langue',
          metier: './src/services/metier',
          store: './src/client/services/redux/store',
          presentation: './src/presentation',
          entreprises: './src/data/entreprises',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
