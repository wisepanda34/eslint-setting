// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(
  // @ts-ignore
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: false,
          tabWidth: 2,
          trailingComma: 'es5',
          bracketSpacing: true,
          jsxBracketSameLine: false,
        },
      ],
      'vue/multi-word-component-names': 'off',
      // Включаем правила конфигурации Prettier для устранения конфликтов
      ...eslintConfigPrettier.rules,
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'max-len': ['error', { code: 150 }],
    },
  },
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      'max-len': ['error', { code: 100 }],
    },
  }
).prepend()
