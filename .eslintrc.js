module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:node/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'node/no-extraneous-import': [
      'warn',
      {
        allowModules: [],
        resolvePaths: [],
        tryExtensions: [],
      },
    ],
    'import/no-unresolved': [2, { ignore: ['.svg$'] }],
    'node/no-missing-import': [
      'error',
      {
        allowModules: [],
        resolvePaths: ['/path/to/a/modules/directory'],
        tryExtensions: ['.js', '.json', '.node', '.jsx'],
      },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],

    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
  },
}
