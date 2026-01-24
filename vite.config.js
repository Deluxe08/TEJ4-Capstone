import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '', // Try relative path instead
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