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
            { text: '📁 Files', link: '/ps4/files' },

            {
              text: '💿 Installation',
              link: '/ps4/installation',
              collapsed: false,
              items: [
                {
                  text: '📦 Installation Variants',
                  link: '/ps4/installation-variants',
                  collapsed: true,
                  items: [
                    {
                      text: '💾 Internal Install',
                      link: '/ps4/internal-installation'
                    },
                    {
                      text: '🤖 External Install Scripted',
                      link: '/ps4/external-installation-scripted'
                    },
                    {
                      text: '🛠️ External Install Manual',
                      link: '/ps4/external-installation-manual'
                    }
                  ]
                }
              ]
            },

            { text: '🚀 Post Installation', link: '/ps4/post-install' },
            { text: '🏁 Finish', link: '/ps4/ending' }
          ]
        },

        {
          text: '💔 Common Issues',
          collapsed: false,
          items: [
            {
              text: '🩹 Common Issues',
              link: '/ps4/issues'
            },
            {
              text: '⚡ Baikal Issues',
              link: '/ps4/baikal-issues'
            }
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
            { text: '📁 Files', link: '/ps5/files' },

            {
              text: '💿 Installation',
              link: '/ps5/installation',
              collapsed: false,
              items: [
                {
                  text: '📦 Installation Variants',
                  link: '/ps5/installation-variants',
                  collapsed: true,
                  items: [
                    {
                      text: '💾 Internal Install',
                      link: '/ps5/internal-installation'
                    },
                    {
                      text: '🔌 External Install',
                      link: '/ps5/external-installation'
                    }
                  ]
                }
              ]
            },

            { text: '🚀 Post Installation', link: '/ps5/postinstall' },
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

    // ---------------- SOCIAL ----------------
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FlyingPhantom/ps4-linux-tutorial/'
      }
    ],

    // ---------------- FOOTER ----------------
    footer: {
      message: 'Released under Apache 2.0 License',
      copyright: 'Copyright © 2025 FlyingPhantom'
    },

    // ---------------- LAST UPDATED ----------------
    lastUpdated: {
      text: 'Updated on'
    }
  }
})