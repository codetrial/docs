function getGotAuthSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'api-app',
        'api-resource',
        'api-role',
        'api-group',
        'api-user',
        'filter',
        'graphql'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: ['dev', 'deploy']
    }
  ];
}

function getWishTodoSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['']
    }
  ];
}

module.exports = {
  contentLoading: true,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Codetrial',
      description: 'Codetrial 相关项目官方文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Codetrial',
      description: 'The official documentation site for codetrial projects.'
    }
  },

  themeConfig: {
    repo: 'codetrial/docs',
    editLinks: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '指南', link: '/guide/' },
          { text: 'GOT Auth', link: '/gotauth/' },
          { text: 'Wishtodo', link: '/wishtodo/' }
        ],
        sidebar: {
          '/gotauth/': getGotAuthSidebar('介绍', '实战'),
          '/wishtodo/': getWishTodoSidebar('介绍')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'GOT Auth', link: '/en/gotauth/' },
          { text: 'Wishtodo', link: '/en/wishtodo/' }
        ],
        sidebar: {
          // '/en/gotauth/': getGotAuthSidebar('Introduction', 'Action'),
          // '/en/wishtodo/': getWishTodoSidebar('Introduction')
        }
      }
    }
  },

  plugins: [
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    ['@vuepress/i18n-ui', true],
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/active-header-links', true],
    ['@vuepress/pagination', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/notification', true]
  ]
};
