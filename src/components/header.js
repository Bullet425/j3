import { Link } from "gatsby"
import React from "react"
import styles from "../css/navbar.module.css"

const Header = () => (
  <nav className={styles.navbarContainer}>
    {/* <Link href="/">
      <div className={styles.menuIcon}>
        <i aria-hidden="true" className={`fa fa-bars fa-2x ${styles.fa}`}></i>
      </div>
    </Link> */}
    {/* <Link href="/">
      <a className={styles.logo}>J3</a>
    </Link> */}
    {/* <ul className={`${styles.ul}`}>
      <li className={styles.li}>
        <Link className={styles.al} to="/">
          Inicio
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.al} to="/">
          Nosotros
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.al} to="/">
          Contactanos
        </Link>
      </li>
    </ul> */}
  </nav>
)

export default Header
