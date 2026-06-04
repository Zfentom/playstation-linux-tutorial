import { defineConfig } from 'vitepress'
import { compression } from 'vite-plugin-compression2'

export default({
  appearance: 'dark',
  mpa: true,
  build: {
    assetsInlineLimit: 10240,
    minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, 
          drop_debugger: true
        }
    }
  },
  plugins: [
    compression({
     algorithms: ['brotliCompress'],
     threshold: 1024,
    })
  ],
  base: '/playstation-linux-tutorial/',
  title: 'PlayStation Linux Guide',
  description: 'Linux installation guides for PS4 and PS5 systems',

head: [
    ['script', { src: '/playstation-linux-tutorial/turbo.min.js', async: true }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/playstation-linux-tutorial/favicon/favicon.webp' }],
    ['meta', { name: 'theme-color', content: '#1ad035' }],
    ['meta', { property: 'og:image', content: '/playstation-linux-tutorial/embed.webp' }]
  ],

cleanUrls:true,

  themeConfig: {
    outline: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Playstation 4 Guide', link: '/ps4/information' },
      { text: 'Playstation 5 Guide', link: '/ps5/information' },
    ],

search: {
   provider: 'local'
},

sidebar: {
      '/ps4/': [
        {
          text: 'PS4 Linux Guide',
          collapsed: false,
          items: [
            { text: 'Information', link: '/ps4/information' },
            { text: 'Setup & Requirements', link: '/ps4/setup' },
            { text: 'Files', link: '/ps4/files' }
          ]
        },
        {
          text: 'Installation & Misc',
          collapsed: false,
          items: [
            { text: 'Internal Install', link: '/ps4/internal-installation' },
            { text: 'External (Scripted)', link: '/ps4/external-installation-scripted' },
            { text: 'External (Manual)', link: '/ps4/external-installation-manual' },
            { text: 'Post-Installation', link: '/ps4/post-install' },
            { text: 'Issues', link: '/ps4/issues' },
            { text: 'Finishing up', link: '/ps4/ending' },
            { text: 'FAQ', link: '/ps4/faq' },
            { text: 'Exploit Host Setup', link: '/ps4/exploit-host' },
            { text: 'Distro DIY', link: '/ps4/distrodiy' }
          ]
        },
        {
          text: 'Gaming & Performance',
          collapsed: false,
          items: [
            { text: 'Game Compatibility', link: '/ps4/games' },
            { text: 'Emulation Guide', link: '/ps4/emulation' },
            { text: 'Performance Tweaks', link: '/ps4/performance' },
            { text: 'Benchmark', link: '/ps4/benchmark' }
          ]
        },
      ],

      '/ps5/': [
        {
          text: 'PS5 Linux Guide',
          items: [
            { text: 'Information', link: '/ps5/information' },
            { text: 'Setup', link: '/ps5/setup' },
          ]
        },
        {
          text: 'Installation',
          collapsed: false,
          items: [
            { text: 'Internal Install', link: '/ps5/internal-installation' },
            { text: 'External Install', link: '/ps5/external-installation' },
            { text: 'Post-Installation', link: '/ps5/post-install' },
            { text: 'Finishing up', link: '/ps5/ending' }
          ]
        },
        {
          text: 'Compatibility & Hardware',
          collapsed: false,
          items: [
            { text: 'Monitors', link: '/ps5/monitors' },
            { text: 'Capture Cards', link: '/ps5/capture-cards' },
            { text: 'M.2 SSDs', link: '/ps5/m2-ssds' },
            { text: 'Other Hardware', link: '/ps5/other-hardware' },
            { text: 'Drivers', link: '/ps5/drivers' }
          ]
        },
        {
          text: 'Knowledge Base',
          collapsed: false,
          items: [
            { text: 'FAQ', link: '/ps5/faq' },
            { text: 'Known Limitations', link: '/ps5/limitations' }
          ]
        },
        {
          text: 'Gaming & Performance',
          collapsed: false,
          items: [
            { text: 'Emulation Guide', link: '/ps5/emulation' },
            { text: 'Performance Tweaks', link: '/ps5/performance' },
            { text: 'Benchmark', link: '/ps5/benchmark' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zfentom/playstation-linux-tutorial/' },
    ],
    footer: {
      message: 'Released under Apache 2.0 License',
      copyright: 'Copyright © 2026 Zfentom'
    }
  }
})
