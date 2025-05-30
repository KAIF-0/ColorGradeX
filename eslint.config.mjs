
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  }
);
