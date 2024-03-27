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
                text: 'React 严格模式',
                link: '/frontend/react/strict-mode'
              }, {
                text: 'createPortal',
                link: '/frontend/react/create-portal'
              }, {
                text: '组件间通信',
                items: [
                  {
                    text: 'props',
                    link: '/frontend/react/component-interaction/props'
                  }, {
                    text: 'state',
                    link: '/frontend/react/component-interaction/state'
                  }, {
                    text: '双向绑定',
                    link: '/frontend/react/component-interaction/two-way-binding'
                  }, {
                    text: '状态提升',
                    link: '/frontend/react/component-interaction/lifting-state-up'
                  }
                ]
              }, {
                text: 'styles',
                items: [
                  {
                    text: 'Stylesheets',
                    link: '/frontend/react/styles/stylesheets'
                  }, {
                    text: 'CSS Modules',
                    link: '/frontend/react/styles/css-modules'
                  }, {
                    text: 'Styled Components',
                    link: '/frontend/react/styles/styled-components'
                  }, {
                    text: 'Tailwind CSS',
                    link: '/frontend/react/styles/tailwind-css'
                  }
                ]
              }, {
                text: 'ref',
                items: [
                  {
                    text: 'ref 引用值',
                    link: '/frontend/react/ref/ref-value'
                  }, {
                    text: 'ref 操作 DOM',
                    link: '/frontend/react/ref/ref-dom'
                  }
                ]
              }, {
                text: 'context',
                link: '/frontend/react/context/index',
                items: [
                  {
                    text: 'createContext',
                    link: '/frontend/react/context/create-context'
                  }, {
                    text: 'useContext',
                    link: '/frontend/react/context/use-context'
                  }, {
                    text: '结合使用 Reducer 和 Context',
                    link: '/frontend/react/context/reducer-and-context'
                  }
                ]
              }, {
                text: 'useEffect',
                link: '/frontend/react/use-effect'
              }, {
                text: 'useCallback',
                link: '/frontend/react/use-callback'
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