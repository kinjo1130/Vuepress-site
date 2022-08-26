---
home: true
externalLinkIcon: true
# heroImage: images/1.jpeg
navbar: true
actions:
  - text: 詳細はありません
    link: /guide/using-vue.html
    type: primary
  - text: 自己紹介なんてない
    link: /guide/
    type: secondary
features:
  - title: 身長
    details: 172cm,あまり面白味のない身長だ
  - title: 体重
    details: おそらく72kg,風呂屋で測ったが、忘れた
  - title: 特技
    details: そんなものはないが、天パが最高に似合っている自負がある
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
