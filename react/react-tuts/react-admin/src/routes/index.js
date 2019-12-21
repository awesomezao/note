import {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit,
  Notifications,
  NoAuth,
  Profile
} from '../views'

export const mainRoutes = [{
  pathname: '/login',
  component: Login
}, {
  pathname: '/404',
  component: NotFound
}]

export const adminRoutes = [{
  pathname: '/admin/dashboard',
  component: Dashboard,
  title: '仪表盘',
  icon: 'dashboard',
  isNav: true,
  roles: ['001', '002', '003']
}, {
  pathname: '/admin/article',
  component: ArticleList,
  title: '文章管理',
  icon: 'unordered-list',
  isNav: true,
  exact: true,
  roles: ['001', '002']
}, {
  pathname: '/admin/article/edit/:id',
  component: ArticleEdit,
  roles: ['001', '002']
}, {
  pathname: '/admin/notifications',
  component: Notifications,
  roles: ['001', '002', '003']
}, {
  pathname: '/admin/noauth',
  component: NoAuth,
  roles: ['001', '002', '003']
}, {
  pathname: '/admin/profile',
  component: Profile,
  roles: ['001', '002', '003']
}, {
  pathname: '/admin/settings',
  component: Settings,
  title: '设置',
  icon: 'setting',
  isNav: true,
  roles: ['001']
}]