import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "ja",
  title: "Kinjyo Shotaro",
  description: "こんにちは",
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
        text: "全て",
        children: [
          {
          text: '',
          link: ''
        }],
      },
      // string - page file path
      // './components/Foo/Bar',
    ],
  }),
});
