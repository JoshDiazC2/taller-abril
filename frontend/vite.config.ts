import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        Components({
            dts: true,
            directoryAsNamespace: true,
            dirs: ['src/components'],
        }),
    ],
    preview: {
        // Railway serves the app from generated hostnames; allow them in preview mode.
        allowedHosts: true,
    },
})
