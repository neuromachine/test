const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'no-dupe-class-members': 'off',
    'tsdoc/syntax': 'off',
    'no-html-link-for-pages': 'off',
    'react/function-component-definition': 'off',
    'eslint-comments/require-description': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-template-curly-in-string': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/app/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
