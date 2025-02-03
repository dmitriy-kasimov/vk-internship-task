import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReact from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
export default tseslint.config(
    { ignores: ['dist', 'eslint.config.js', 'node_modules', '.git'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'unused-imports': unusedImports,
            'eslint-plugin-react': eslintPluginReact
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'eslint-plugin-react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
            'unused-imports/no-unused-imports': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
            'no-unused-vars': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
        }
    }
)
