import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import jest from 'eslint-plugin-jest'

export default [
  js.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'coverage'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      prettier,
      jest,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'off',
    },
  },
]
