import React, { SFC } from "react"
import routes from "src/router"
import { NavLink } from "react-router-dom"
import styles from "./styles.scss"

const activeClassName = `${styles["link"]} ${styles["active"]}`

const SideLayout: SFC = ({ children }) => (
  <main className={styles["side-layout"]}>
    <nav className={styles["navigation"]}>
      <ul>
        {routes.map((item, index) => (
          <li key={index}>
            <NavLink
              className={styles.link}
              activeClassName={activeClassName}
              to={{ pathname: item.path }}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <div className={styles["main-content"]}>{children}</div>
  </main>
)

export default SideLayout
