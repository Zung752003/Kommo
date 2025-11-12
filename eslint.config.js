import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig, globalIgnores } from 'eslint/config'

import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

export default defineConfig([
  globalIgnores([
    'dist',
    'build',
    'node_modules',
    '.env',
    'tailwind.config.js',
    'postcss.config.js',
    'eslint.config.js'
  ]),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject: true
      }
    },

    // ✅ Tất cả config cũ (có "plugins": ["..."]) đều bọc bằng compat
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...compat.extends('plugin:react/recommended'),
      ...compat.extends('plugin:react-hooks/recommended'),
      ...compat.extends('plugin:import/recommended'),
      ...compat.extends('plugin:jsx-a11y/recommended'),
      ...compat.extends('prettier'),
      reactRefresh.configs.vite
    ],

    // ✅ Flat plugin object (không mảng string nào nữa)
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
      }
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'warn',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  }
])
