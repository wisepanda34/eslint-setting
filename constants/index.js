export const links = [
  {
    text: 'Модуль ESLint',
    href: 'https://eslint.nuxt.com/packages/module#config-customizations',
  },
  {
    text: 'Плоская система конфигурации ESLint',
    href: 'https://eslint.org/blog/2022/08/new-config-system-part-2/',
  },
  {
    text: 'Установка и настройка Prettier',
    href: 'https://prettier.io/docs/en/install',
  },
]
export const eslintConfigFile = `
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
  `
export const prettierConfigFile = `
    module.exports = {
    singleQuote: true, // Использовать одинарные кавычки
    semi: false, // Отключить точку с запятой в конце строки
    tabWidth: 2, // Ширина табуляции
    trailingComma: 'es5', // Запятая в последнем элементе объекта/массива
    bracketSpacing: true, // Пробелы между скобками
    bracketSameLine: false, // Закрывающая скобка JSX на новой строке
  }
`
export const settingsJsonFile = `
  {
    "files.autoSave": "onFocusChange",
    "editor.fontSize": 16,
    "editor.tabSize": 2,
    "editor.minimap.enabled": false,
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "git.autofetch": true,
    "editor.fontFamily": "Consolas, 'Courier New', monospace, iA Writer Mono S",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.editorAssociations": {
      "*.woff2": "default"
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "explorer.confirmDelete": false,
    "git.confirmSync": false,
    "git.showActionButton": {
      "sync": false,
      "publish": false
    },
    "scm.showChangesSummary": false,
    "scm.showIncomingChanges": "never",
    "scm.showOutgoingChanges": "never",
    "json.schemas": [],
    "prettier.configPath": ".prettier.config.cjs",
    "editor.formatOnPaste": false,
    "editor.formatOnType": false,
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {

      "source.fixAll.eslint": "explicit"
    },
    "scss.lint.unknownAtRules": "ignore",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "eslint.format.enable": true,
    "prettier.useEditorConfig": true,
    "prettier.requireConfig": true,
    "outline.showFunctions": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "vue",
      "html",
      "css",
      "scss"
    ],
    "eslint.useFlatConfig": true,
    "http.proxyAuthorization": null,
    "editor.fontLigatures": false
  }
`
export const scripts = `
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "prettier": "prettier --write .",
  "prettier:check": "prettier --check .",
  "fix": "eslint . --fix && prettier --write .",
`
