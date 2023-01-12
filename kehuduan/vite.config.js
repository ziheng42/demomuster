import { defineConfig } from 'vite'
// import dns from 'dns'

// dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    server: {
        open: true,
        port: 5173,
        host: true
    },
})