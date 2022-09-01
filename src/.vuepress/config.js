import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "ja",
  title: "Kinjyo Shotaro",
  description: "金城のポートフォリオです",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  theme: defaultTheme({
    // default theme config
    navbar: [
      // NavbarItem
      {
        text: "詳細",
        link: "/detail",
      },
      // NavbarGroup
      {
        text: "その他",
        children: [
          {
            text: "SNS",
            link: "/sns",
          }
        ],
      },
      // string - page file path
      // './components/Foo/Bar',
    ],
  }),
});
