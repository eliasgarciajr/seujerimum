import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.JPG', '**/*.JPEG', '**/*.PNG'],

  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 10000, // Aumenta o limite para arquivos grandes
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: undefined,
      }
    }
  },

  // Garante que o servidor dev sirva os arquivos corretamente
  server: {
    fs: {
      strict: false
    }
  }
})
