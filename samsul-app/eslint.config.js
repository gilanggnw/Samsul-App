import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,

  // Add the process global to avoid "process is not defined" error
  {
    env: {
      node: true, // Add this to allow `process` to be recognized in Node.js environments
      browser: true, // This is the default for Vue projects (browser-based)
    },
  },
]
