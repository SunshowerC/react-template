import * as React from 'react'
// const s = require('./style.module.css')
import * as s from './style.module.css'
import Add from './components/Operate'
import Multiple from './components/Multiplication'
import Result from './components/Result'

const HomePage = () => (
  <p className={s.hello}>
    Home Page <br />
    <Add name="sss" />
    <Multiple name="*" />
    <Result />
  </p>
)

export default HomePage
