// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: "vercel-static"
    },
    vite: {
        optimizeDeps: {
            include: [
                '@vue/devtools-core',
                '@vue/devtools-kit',
            ]
        }
    },
    css: ['~/assets/css/main.css'],
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: [
        '@nuxt/content',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/fonts'
    ],
    content: {
        build: {
            markdown: {
                remarkPlugins: {
                    'remark-math': {}
                },
                rehypePlugins: {
                    'rehype-mathjax': {}
                },
                highlight: {
                    theme: 'github-dark',
                    langs: [
                        'bash',
                        'python',
                        'cpp',
                    ]
                }
            }
        },
        renderer: {
            anchorLinks: false
        }
    }
})