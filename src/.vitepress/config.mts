import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid';
import getSidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withMermaid({
    title: "JSFullStack",
    description: "JavaScript full stack knowledge",
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
        { text: '前端', link: '/frontend/index' },
        { text: '后端', link: '/backend/nodejs/index' },
        { text: 'AI', link: '/artificial-intelligence/index'},
        { text: '参考', link: '/reference' }
      ],

      sidebar: getSidebar(),

      socialLinks: [
        { icon: 'github', link: 'https://github.com/GuoXiCheng' }
      ]
    }
  })
)