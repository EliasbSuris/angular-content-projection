// @ts-check
const eslint = require('@eslint/js');
// const {defineConfig} = require('@eslint/config-helpers');
const { defineConfig } = require("eslint/config");
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig(
  {
    ignores: [
      'projects/**/*',
      '**/node_modules',
      '**/dist',
      '**/coverage',
      'src/testing',
      '**/package.json',
      '**/package-lock.json',
      '**/.history'
    ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
       prettier: eslintPluginPrettier
    },
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      }
    },
    rules: {
      '@angular-eslint/component-class-suffix': [
        'off'
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['aor'],
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: ['aor'],
          style: 'camelCase'
        }
      ],
      '@typescript-eslint/naming-convention': 0,
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
          readonly: 'array-simple'
        }
      ],
      '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
      ...eslintConfigPrettier.rules,
      ...eslintPluginPrettierRecommended.rules
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/prefer-self-closing-tags": [
        "warn"
      ]
    }
  },
  {
    files: ['**/*.html'],
    ignores: ['**/inline-template-*.component.html'],
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          parser: 'angular',
          endOfLine: 'auto'
        }
      ],
      ...eslintPluginPrettierRecommended.rules
    }
  }
);
