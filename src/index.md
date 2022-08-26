---
home: true
externalLinkIcon: true
# heroImage: images/1.jpeg
navbar: true
actions:
  - text: Get Started
    link: /guide/using-vue.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
heroText: Kinjyo Shotaro
footer: Made by 金城
---


[Guide](./guide/using-vue.md)  
[外部へ飛ぶ](https://github.com/vuepress/vuepress-next)  
VuePress 2 is out :tada: !


```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
