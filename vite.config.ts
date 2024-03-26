import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/free_to_play_games',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
