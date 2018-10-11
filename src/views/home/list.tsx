import * as React from "react"
// const s = require('./style.module.css')
import * as s from "./style.module.css"
import Add from "./components/Operate"
import Multiple from "./components/Multiplication"
import Result from "./components/Result"
import AddList from "./components/AddList"

const HomePage = () => (
  <div className={s.hello}>
    Home Page <br />
    <AddList />
    <Add name="sss" />
    <Add name="sss" />
    <Multiple name="*" />
    <Result />
  </div>
)

export default HomePage
