import BlankLayout from '../layouts/BlankLayout'
import HeaderLayout from '../layouts/HeaderLayout'
import HomePage from '../views/home/list'
import UserList from '../views/user/list'
import { ReactType } from 'react'
// import Loadable from 'react-loadable'
// import Loading from '../components/loading'

// const dynamicImport = (path, loading = Loading) =>
//   Loadable({
//     loader: () => import(path),
//     loading
//   })

interface IRouteConfig {
  name: string
  path: string
  // layout:  Component | JSX.Element | ((props: any) => JSX.Element)
  layout: typeof BlankLayout | typeof HeaderLayout
  component: ReactType
}

const routes: IRouteConfig[] = [
  {
    name: 'user',
    path: '/user',
    component: UserList,
    layout: BlankLayout
  },
  {
    name: 'home',
    path: '/',
    component: HomePage,
    layout: HeaderLayout
  }
]

export default routes
