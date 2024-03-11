import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JSFullStack",
  description: "A VitePress Site",
  base: "/",
  themeConfig: {
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
              ]
            }
          ]
        },
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
