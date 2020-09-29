import React from "react"
import styles from "../../css/experiencia/experienciaPart3.module.css"
import { Link } from "gatsby"

const ExperienciaPart3 = () => {
  return (
    <Link to="/contactanos" className={styles.container}>
      <div className={styles.containerAnimation}>
        <h1 className={styles.title}>Listo para empezar?</h1>
        <h2 className={styles.subTitle}>Contactanos</h2>
      </div>
    </Link>
  )
}

export default ExperienciaPart3
