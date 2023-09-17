module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   files: ["src/**/*.ts"],
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
   },
   plugins: ['@typescript-eslint'],
   rules: {
      //indent: ['error', 2],
      'linebreak-style': 0,
      quotes: ['error', 'single', { "avoidEscape": true }],
      semi: ['error', 'always'],
      '@typescript-eslint/no-non-null-assertion': 'off',
   },
};
