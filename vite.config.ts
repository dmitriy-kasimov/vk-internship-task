import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({
            babelConfig: {
                exclude: /node_modules/,
                presets: ['@babel/preset-env']
            }
        })
    ],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    base: './'
})
