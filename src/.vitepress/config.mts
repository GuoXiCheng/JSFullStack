import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid';
import { sidebarJS } from './sidebars/javascript';

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withMermaid({
    title: "JSFullStack",
    description: "A VitePress Site",
    base: "/",
    lastUpdated: true,
    themeConfig: {
      editLink: {
        pattern: 'https://github.com/GuoXiCheng/JSFullStack/edit/main/src/:path'
      },
      outline: {
        level: 'deep'
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'JavaScript', link: '/javascript/index' },
        { text: '前端', link: '/frontend/react/jsx' },
        { text: '后端', link: '/backend/nodejs/index' },
        { text: '参考', link: '/reference' }
      ],

      sidebar: {
        '/javascript': sidebarJS(),
        '/backend': [
          {
            text: 'Node.js',
            link: '/backend/nodejs/index',
            items: [
              {
                text: 'EventEmitter',
                link: '/backend/nodejs/event-emitter'
              }, {
                text: 'File System',
                link: '/backend/nodejs/file-system'
              }
            ]
          }
        ],
        '/frontend': [
          {
            text: 'React',
            items: [
              {
                text: 'JSX语法',
                link: '/frontend/react/jsx'
              }, {
                text: '插槽',
                link: '/frontend/react/slot'
              }, {
                text: '动态组件标识符',
                link: '/frontend/react/dynamic-component-identifier'
              }, {
                text: '组件间通信',
                items: [
                  {
                    text: 'props',
                    link: '/frontend/react/component-interaction/props'
                  }, {
                    text: 'state',
                    link: '/frontend/react/component-interaction/state'
                  }
                ]
              }
            ]
          }
        ]
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/GuoXiCheng' }
      ]
    }
  })
)