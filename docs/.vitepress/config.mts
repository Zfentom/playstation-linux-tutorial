import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,

  title: 'PlayStation Linux Guide',
  description: 'Linux installation guides for PS4 and PS5 systems',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: 'PS4 and PS5 Linux installation, setup, and optimization guides.' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    ['meta', { property: 'og:title', content: 'PlayStation Linux Guide' }],
    ['meta', { property: 'og:description', content: 'Step-by-step Linux guides for PS4 and PS5.' }],
    ['meta', { property: 'og:type', content: 'website' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  themeConfig: {
    // ---------------- NAVIGATION ----------------
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '🎮 PS4 Guide', link: '/ps4/information' },
      { text: '🎮 PS5 Guide', link: '/ps5/information' },
      { text: '🛠️ Issues', link: '/issues' },
      {
        text: '📚 More',
        items: [
          { text: '⚡ Performance Tweaks', link: '/miscellaneous/performance' },
          { text: '🔧 Kernel Guide', link: '/miscellaneous/kernel' },
          { text: '🎮 Emulation', link: '/miscellaneous/emulation' }
        ]
      }
    ],

    // ---------------- SIDEBAR ----------------
    sidebar: {
      '/ps4/': [
        {
          text: '📖 PS4 Linux Guide',
          collapsed: false,
          items: [
            { text: '📌 Information', link: '/ps4/information' },
            { text: '⚙️ Setup', link: '/ps4/setup' },
            {
              text: '💿 Installation',
              collapsed: false,
              items: [
                {
                  text: '📦 Installation Variants',
                  collapsed: false,
                  items: [
                    { text: '💾 Internal Install', link: '/ps4/internal-installation' },
                    { text: '🤖 External Install Scripted', link: '/ps4/external-installation-scripted' },
                    { text: '🛠️ External Install Manual', link: '/ps4/external-installation-manual' }
                  ]
                }
              ]
            },
            { text: '🚀 Post Installation', link: '/ps4/post-install' },
            { text: '🏁 Finish', link: '/ps4/ending' },
            { text: '🧩 Game compatibility', link: '/ps4/games' },
            { text: '💜 Distro DIY', link: '/ps4/distrodiy' }
          ]
        }
      ],

      '/ps5/': [
        {
          text: '📖 PS5 Linux Guide',
          collapsed: false,
          items: [
            { text: '📌 Information', link: '/ps5/information' },
            { text: '⚙️ Setup', link: '/ps5/setup' },
            {
              text: '💿 Installation',
              collapsed: false,
              items: [
                { text: '💾 Internal Install', link: '/ps5/internal-installation' },
                { text: '🔌 External Install', link: '/ps5/external-installation' }
              ]
            },
            {
              text: '🧩 Compatibility',
              collapsed: true,
              items: [
                { text: '🖥️ Monitors', link: '/ps5/compatibility/monitors' },
                { text: '🎥 Capture Cards', link: '/ps5/compatibility/capture-cards' },
                { text: '💽 M.2 SSDs', link: '/ps5/compatibility/m2-ssds' },
                { text: '🧰 Other Hardware', link: '/ps5/compatibility/other-hardware' },
                { text: '🔧 Drivers', link: '/ps5/compatibility/drivers' }
              ]
            },
            { text: '🚀 Post Installation', link: '/ps5/post-install' },
            { text: '🏁 Finish', link: '/ps5/ending' }
          ]
        }
      ],

      '/miscellaneous/': [
        {
          text: '🛠️ Miscellaneous',
          collapsed: false,
          items: [
            { text: '⚡ Performance Tweaks', link: '/miscellaneous/performance' },
            { text: '🔧 Kernel Compilation', link: '/miscellaneous/kernel' },
            { text: '🎮 Emulation', link: '/miscellaneous/emulation' },
            { text: '📊 Benchmarks', link: '/miscellaneous/benchmark' },
            { text: '🧩 Mesa Drivers', link: '/miscellaneous/mesa' },
            { text: '📡 Exploit Host Setup', link: '/miscellaneous/exploit-host' }
          ]
        }
      ],

      '/': [
        {
          text: '💔 General Issues',
          collapsed: false,
          items: [
            { text: '🩹 Troubleshooting', link: '/issues' }
          ]
        },
        {
          text: '☠️ Legacy',
          collapsed: true,
          items: [
            { text: '📚 Preservation Content', link: '/legacy' }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FlyingPhantom/ps4-linux-tutorial/'
      }
    ],

    footer: {
      message: 'Released under Apache 2.0 License',
      copyright: 'Copyright © 2025 FlyingPhantom'
    },

    lastUpdated: {
      text: 'Updated on'
    }
  }
})