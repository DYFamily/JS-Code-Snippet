// 菜单
const menu = [
  {
    name: '品牌馆',
    icon: 'icon-crop',
    path: '/brand',
    routes: [
      {
        name: '品牌管理', path: '/brand/list', component: './brand/list', routes: [
          {
            name: '品牌分类', path: '/brand/list/category', component: './brand/list/category'
          }
        ]
      },
      { name: '品牌联系人', path: '/brand/contact', component: './brand/contact' },
      { name: '开通品牌馆', path: '/brand/settled', component: './brand/settled' },
    ],
  },
  {
    name: '勋章管理',
    path: '/honor',
    routes: [
      {
        name: '勋章列表',
        path: '/honor/list',
      },
      {
        name: '编辑勋章',
        path: '/honor/edit',
      },
    ]
  }
]
// 保留的数据
const arr = [
  {
    nodePath: '/brand/list/category',
    nodeName: '品牌分类'
  },
  {
    nodePath: '/brand/contact',
    nodeName: '品牌联系人'
  },
  {
    nodePath: '/honor/edit',
    nodeName: '编辑勋章',
  },
]

/**
 * 根据`全量路径`过滤菜单
 * @param  {Array} menu 原始菜单
 * @param  {Array} filterMenu 需要保留的菜单数组
 * @return {Array} 过滤后的菜单
 **/
const getFilterMenu = (menu, filterMenu) => {
  return menu.filter(menu => {
    return filterMenu.some(it => it.nodePath === menu.path || it.nodePath.indexOf(menu.path) > -1)
  }).map(item => {
    if (item.routes) {
      item.routes = getFilterMenu(item.routes, filterMenu)
    }
    return item;
  })
}
