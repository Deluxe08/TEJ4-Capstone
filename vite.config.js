import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
    const base = command === 'serve' ? '' : '/TEJ4-Capstone/';

    return {
        plugins: [react(), tailwindcss()],
        base: base, // Empty for local dev, /repo-name/ for production
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
    };
});