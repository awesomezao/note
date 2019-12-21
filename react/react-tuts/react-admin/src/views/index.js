import Loadable from 'react-loadable'
// 下面注释的这个文件就是一个简易的react-loadable的原理
// import Loadable from './loadable'
import { Loading } from '../components'
// import Dashboard from './Dashboard'
// import Login from './Login'
// import NotFound from './NotFound'
// import Settings from './Settings'
// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'
// 下面是懒加载
const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})
const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
})
const ArticleList = Loadable({
  loader: () => import('./Article'),
  loading: Loading
})
const ArticleEdit = Loadable({
  loader: () => import('./Article/Edit'),
  loading: Loading
})
const Notifications = Loadable({
  loader: () => import('./Notifications'),
  loading: Loading
})
const NoAuth = Loadable({
  loader: () => import('./NoAuth'),
  loading: Loading
})
const Profile = Loadable({
  loader: () => import('./Profile'),
  loading: Loading
})

export {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit,
  Notifications,
  NoAuth,
  Profile
}