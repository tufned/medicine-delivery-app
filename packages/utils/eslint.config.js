import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import baseConfig from '@mda/eslint-config/base.config';


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
