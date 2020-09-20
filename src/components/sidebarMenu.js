import React from "react"
import styles from "../css/sidebarMenu.module.css"

const SidebarMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ul className={styles.navbarNav}>
          <li className={styles.logo}>
            <a className={styles.navLinkLogo}>
              <span className={styles.linkText}>J3 Solutions</span>
              <i
                aria-hidden="true"
                className={`fas fa-angle-double-right ${styles.faLogo}`}
              ></i>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink}>
              <i aria-hidden="true" className={`fas fa-home ${styles.fa2}`}></i>
              <span className={styles.linkText}>Inicio</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink}>
              <i aria-hidden="true" className={`fas fa-cogs ${styles.fa2}`}></i>
              <span className={styles.linkText}>Servicios</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink}>
              <i
                aria-hidden="true"
                className={`fas fa-medal ${styles.fa2}`}
              ></i>
              <span className={styles.linkText}>Experiencia</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink}>
              <i
                aria-hidden="true"
                className={`fas fa-id-badge ${styles.fa2}`}
              ></i>
              <span className={styles.linkText}>Contactanos</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarMenu
