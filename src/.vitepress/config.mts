import { DefaultTheme, defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid';

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
        { text: 'NodeJS', link: '/nodejs/index' },
        { text: 'Examples', link: '/markdown-examples' },
        { text: '参考', link: '/reference' }
      ],

      sidebar: {
        '/javascript': sidebarJS(),
        '/nodejs': [
          {
            text: 'EventEmitter',
            link: '/nodejs/event-emitter'
          }
        ],
        '/markdown-examples': [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
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

function sidebarJS(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'ECMAScript',
      link: '/javascript/ecma-script/index',
      items: [
        {
          text: '基本引用类型',
          base: '/javascript/ecma-script/basic-reference',
          items: [
            { text: 'Date', link: '/date' },
            { text: '正则表达式', link: '/reg-exp' }
          ]
        }, {
          text: '集合引用类型',
          base: '/javascript/ecma-script/collection-reference',
          items: [
            { text: 'Array', link: '/array' },
            { text: 'Map', link: '/map' },
            { text: 'Set', link: '/set' }
          ]
        }, {
          text: '迭代器',
          link: '/javascript/ecma-script/iterator'
        }, {
          text: '生成器',
          link: '/javascript/ecma-script/generator'
        }, {
          text: 'JSON',
          link: '/javascript/ecma-script/json'
        }
      ]
    }, {
      text: 'BOM',
      base: '/javascript/bom',
      items: [
        { text: 'screen', link: '/screen' }
      ]
    }
  ]
}