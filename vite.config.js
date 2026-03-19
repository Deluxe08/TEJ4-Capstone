
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  base: '/TEJ4-Capstone/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React libraries into separate chunk
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // Split GSAP and Three.js (your largest dependencies)
          'animation-vendor': ['gsap', '@gsap/react', 'gsap/ScrollTrigger'],
          
          // The TEJ page will automatically be code-split due to lazy()
        }
      }
    },
    // Increase the warning limit to 1000 KB (warning won't show unless chunks exceed 1 MB)
    chunkSizeWarningLimit: 1000,
    
    // Enable source maps for debugging (optional)
    sourcemap: false,
    
    // Use default esbuild minifier (faster and built-in)
    minify: 'esbuild'
  }
})
