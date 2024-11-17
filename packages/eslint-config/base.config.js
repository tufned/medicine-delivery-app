import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierOptions from '@mda/prettier-config';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist'] },
  { files: ['**/*.{ts}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: eslintPluginPrettier
    }
  },
  {
    rules: {
      'prettier/prettier': ['warn', prettierOptions],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'prefer-const': 'off',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxEOF: 0,
          maxBOF: 0
        }
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true
      }]
    }
  }
];
