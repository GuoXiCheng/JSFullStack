import { defineConfig } from 'vitepress'
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
        { text: 'Examples', link: '/markdown-examples' }
      ],
  
      sidebar: {
        '/javascript': [
          {
            text: 'ECMAScript',
            link: '/javascript/ecma-script/index',
            items: [
              { 
                text: '基本引用类型',
                items: [
                  { text: 'Date', link: '/javascript/ecma-script/basic-reference/date' },
                  { text: '正则表达式', link: '/javascript/ecma-script/basic-reference/reg-exp' }
                ]
              }
            ]
          },
          {
            text: 'BOM',
            items: [
              {
                text: 'screen',
                link: '/javascript/bom/screen'
              }
            ]
          }
          // {
          //   text: 'DOM',
          //   link: '/javascript/dom/index',
          //   items: []
          // },{
          //   text: 'BOM',
          //   link: '/javascript/bom/index',
          //   items: []
          // }
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
