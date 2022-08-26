
import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'ja',
  title: 'Kinjyo Shotaro',
  description: 'こんにちは',
  theme: defaultTheme({
    // default theme config
    navbar: [
      // NavbarItem
      {
        text: 'Detail',
        link: '/Guide/',
      },
      // NavbarGroup
      {
        text: 'ALL',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      // './components/Foo/Bar',
    ],
  }),
})

