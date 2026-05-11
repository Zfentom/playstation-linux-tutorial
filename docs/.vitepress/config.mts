import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  base: '/playstation-linux-tutorial/',
  title: 'PlayStation Linux Guide',
  description: 'Linux installation guides for PS4 and PS5 systems',

  head: [
    ['link', { rel: 'icon', href: '/playstation-linux-tutorial/favicon/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { property: 'og:image', content: '/playstation-linux-tutorial/og-image.png' }]
  ],

  themeConfig: {
    logo: '/favicon/favicon.ico',
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: 'Playstation 4 Guide', link: '/ps4/information' },
      { text: 'Playstation 5 Guide', link: '/ps5/information' },
    ],

    sidebar: {
      '/ps4/': [
        {
          text: '📖 PS4 Linux Guide',
          items: [
            { text: '📌 Information', link: '/ps4/information' },
            { text: '⚙️ Setup & Requirements', link: '/ps4/setup' },
            { text: '📁 Files', link: '/ps4/files' },
            {
              text: '💿 Installation',
              collapsed: false,
              items: [
                { text: 'Internal Install', link: '/ps4/internal-installation' },
                { text: 'External (Scripted)', link: '/ps4/external-installation-scripted' },
                { text: 'External (Manual)', link: '/ps4/external-installation-manual' },
                { text: '🚀 Post-Installation', link: '/ps4/post-install' },
                { text: '⚠️ Issues', link: '/ps4/issues' }
              ]
            },
            {
              text: '💡 Knowledge Base',
              collapsed: false,
              items: [
                { text: '🔒 FAQ', link: '/ps4/faq' }
              ]
            },
            {
              text: '🎮 Gaming & Performance',
              collapsed: true,
              items: [
                { text: 'Game Compatibility', link: '/ps4/games' },
                { text: 'Emulation Guide', link: '/ps4/emulation' },
                { text: 'Performance Tweaks', link: '/ps4/performance' }
              ]
            },
            {
              text: '🛠️ Advanced',
              collapsed: true,
              items: [
		{ text: 'UART', link: '/ps4/uart' },
                { text: 'Exploit Host Setup', link: '/ps4/exploit-host' },
                { text: '💜 Distro DIY', link: '/ps4/distrodiy' }
              ]
            },
            { text: '🏁 Conclusion', link: '/ps4/ending' }
          ]
        }
      ],

      '/ps5/': [
        {
          text: '📖 PS5 Linux Guide',
          items: [
            { text: '📌 Information', link: '/ps5/information' },
            { text: '⚙️ Setup', link: '/ps5/setup' },
            {
              text: '💿 Installation',
              collapsed: false,
              items: [
                { text: '💾 Internal Install', link: '/ps5/internal-installation' },
                { text: '🔌 External Install', link: '/ps5/external-installation' },
                { text: '🚀 Post-Installation', link: '/ps5/post-install' }
              ]
            },
            {
              text: '🧩 Compatibility & Hardware',
              collapsed: false,
              items: [
                { text: '🖥️ Monitors', link: '/ps5/monitors' },
                { text: '🎥 Capture Cards', link: '/ps5/capture-cards' },
                { text: '💽 M.2 SSDs', link: '/ps5/m2-ssds' },
                { text: '🧰 Other Hardware', link: '/ps5/other-hardware' },
                { text: '🔧 Drivers', link: '/ps5/drivers' }
              ]
            },
            {
              text: '💡 Knowledge Base',
              collapsed: false,
              items: [
                { text: '❓ FAQ', link: '/ps5/faq' },
                { text: '🎮 Console Experience', link: '/ps5/console-experience' },
                { text: '🔒 Known Limitations', link: '/ps5/limitations' }
              ]
            },
            { text: '🏁 Conclusion', link: '/ps5/ending' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FlyingPhantom/playstation-linux-tutorial/' }
    ],

    editLink: {
      pattern: 'https://github.com/FlyingPhantom/playstation-linux-tutorial/edit/main/docs/',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under Apache 2.0 License',
      copyright: 'Copyright © 2025 FlyingPhantom'
    }
  }
})