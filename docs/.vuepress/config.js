module.exports = {
  title: 'cuttle-UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/Introduction/'},
      {text:'github',link:'https://github.com/maple436/gulu-ui'}
    ],
   sidebar: [
       {
         title: '入门',
         sidebarDepth: 0,
         children: [
           '/Introduction/',
           '/get-started/',
         ]
       },
       {
         title: '组件',
         collapsable: false,
         sidebarDepth: 0,
         children: [
           '/components/button.md',
           '/components/input.md',
           '/components/grid.md',
           '/components/layout.md',
           '/components/toast.md',
           '/components/tabs.md',
           '/components/popover.md',
           '/components/collapse.md',
         ]
       },

     ],
    logo: '/cuttle.png',
  }
}