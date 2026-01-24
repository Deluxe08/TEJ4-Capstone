import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/TEJ4-Capstone/', // Add this line - must match your repo name
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'gsap-vendor': ['gsap'],
                    'three-vendor': ['three']
                }
            }
        },
        chunkSizeWarningLimit: 1000
    }
});