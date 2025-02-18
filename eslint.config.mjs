// import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  ...ts.configs.recommended,
  // ...fixupConfigRules([]),
  { ignores: ['dist/', 'src/**/fonts/'] },
];
