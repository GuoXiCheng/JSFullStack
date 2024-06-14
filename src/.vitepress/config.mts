import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import getSidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withMermaid({
    title: "JSFullStack",
    description: "JavaScript full stack knowledge",
    base: "/",
    lastUpdated: true,
    themeConfig: {
      editLink: {
        pattern:
          "https://github.com/GuoXiCheng/JSFullStack/edit/main/src/:path",
      },
      outline: {
        level: "deep",
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        {
          text: "JavaScript",
          items: [
            {
              text: "介绍",
              link: "/javascript/introduction/what-is-javascript",
            },
            {
              text: "ECMAScript",
              link: "/javascript/ecma-script/es-version",
            },
            {
              text: "BOM",
              link: "/javascript/bom/what-is-bom",
            },
            {
              text: "DOM",
              link: "/javascript/dom/what-is-dom",
            },
          ],
        },
        {
          text: "前端",
          items: [
            {
              text: "Vue",
              link: "frontend/vue/introduction/what-is-vue",
            },
            {
              text: "React",
              link: "frontend/react/introduction/what-is-react",
            },
          ],
        },
        { text: "后端", link: "/backend/nodejs/index" },
        { text: "云原生", link: "/cloud-native/index" },
        { text: "AI", link: "/ai/index" },
        { text: "参考", link: "/reference" },
      ],

      sidebar: getSidebar(),

      socialLinks: [
        { icon: "github", link: "https://github.com/GuoXiCheng/JSFullStack" },
      ],
    },
  })
);
