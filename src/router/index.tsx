import React from "react"
import BlankLayout from "../layouts/BlankLayout"
// import HeaderLayout from "../layouts/HeaderLayout"

import { ReactType } from "react"
import Loadable from "react-loadable"
import Loading from "../components/loading"
import SideLayout from "src/layouts/SideLayout"

// const dynamicImport = (path, loading = Loading) =>
//   Loadable({
//     loader: () => import(path),
//     loading
//   })

interface IRouteConfig {
  name: string
  path: string
  // layout:  Component | JSX.Element | ((props: any) => JSX.Element)
  layout: ReactType
  component: ReactType
  children?: IRouteConfig
}

const routes: IRouteConfig[] = [
  {
    name: "user",
    path: "/user",
    component: Loadable({
      loader: () =>
        import(/*  webpackChunkName: "user" */ "../views/user/list"),
      loading: Loading
    }),
    layout: BlankLayout
  },
  {
    name: "home",
    path: "/",
    component: Loadable({
      loader: () =>
        import(/*  webpackChunkName: "home " */ "../views/home/list"),
      loading: Loading
    }),
    layout: SideLayout
  },
  {
    name: "test",
    path: "/test",
    component: () => <p style={{ background: "red" }}> test </p>,
    layout: SideLayout
  }
]

export default routes
