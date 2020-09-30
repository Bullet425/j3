import React, { useState } from "react"
import styles from "../../css/layout/sidebarMenu.module.css"
import { Link } from "gatsby"

const SidebarMenu = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <ul className={styles.navbarNav}>
            <li className={styles.logo}>
              <span className={styles.linkText}>J3 Solutions</span>
              <i
                aria-hidden="true"
                className={`fas fa-angle-double-right ${styles.faLogo}`}
              ></i>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/">
                <i aria-hidden="true" className={`fas fa-home ${styles.fa2}`} />
                <p className={styles.linkText}>Inicio</p>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/servicios">
                <i
                  aria-hidden="true"
                  className={`fas fa-cogs ${styles.fa2}`}
                ></i>
                <p className={styles.linkText}>Servicios</p>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/experiencia">
                <i
                  aria-hidden="true"
                  className={`fas fa-medal ${styles.fa2}`}
                ></i>
                <p className={styles.linkText}>Experiencia</p>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/contactanos">
                <i
                  aria-hidden="true"
                  className={`fas fa-id-badge ${styles.fa2}`}
                ></i>
                <p className={styles.linkText}>Contactanos</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className={styles.navbarContainer}>
        <div className={styles.menuIcon}>
          <i
            onClick={showMenu}
            aria-hidden="true"
            className={`fa fa-bars fa-2x ${styles.fa}`}
          ></i>
        </div>
        {menu ? (
          <ul className={styles.ul2}>
            <li className={styles.li2}>
              <Link to="/" className={styles.link}>
                Inicio
              </Link>
            </li>
            <li className={styles.li2}>
              <Link to="/servicios" className={styles.link}>
                Servicios
              </Link>
            </li>
            <li className={styles.li2}>
              <Link to="/experiencia" className={styles.link}>
                Experiencia
              </Link>
            </li>
            <li className={styles.li2}>
              <Link to="/contactanos" className={styles.link}>
                Contactanos
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </>
  )
}

export default SidebarMenu
