module.exports = {
  title: 'VuePressDemo', // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
  description: '基于VuePress的测试Demo', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  markdown: {
    lineNumbers: true, // 代码显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // 默认情况下，侧边栏会自动地显示由当前页面的标题（headers）组成的链接，并按照页面本身的结构进行嵌套，你可以通过 themeConfig.sidebarDepth 来修改它的行为。默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。
    nav: [ // 导航栏 可能包含你的页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置。
      { text: '主页', link: '/' },
      {
        text: '教程',
        items: [
          { text: '快速上手', link: '/guide/' }, // 需要创建/guide/README.md文件
          { text: '问题反馈', link: '/guide/issue/' }, // 需要创建/guide/issue/README.md文件
        ]
      },
      { text: 'Github', link: 'https://github.com/wangwenjie1314/vuepress-demo' }, //
    ],
    sidebar: [ // 侧边栏分组配置
      ['/guide/', '安装指南'],
      ['/guide/issue/', '问题反馈'],
    ]
  }
}