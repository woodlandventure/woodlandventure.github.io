// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['styled-system/**', 'postcss.config.cjs'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
