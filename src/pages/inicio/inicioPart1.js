import React from "react"
import styles from "../../css/InicioPart1.module.css"
import { graphql, useStaticQuery } from "gatsby"

const InicioPart1 = () => {
  // const { image } = useStaticQuery(graphql`
  // `)
  return (
    <div className={styles.parallaxFour}>
      <div className={styles.containerRight}>
        <p className={styles.title}>J3 Solutions</p>
        {/* <div className={styles.subTitles}>
          <p className={styles.li1}>Tecnologia</p>
          <p className={styles.li2}>Desarrollo</p>
          <p className={styles.li3}>Original</p>
          <p className={styles.li4}>Diferente</p>
        </div> */}
        <p className={styles.containerte}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleif.
        </p>
        <button className={styles.btnFirst}>Empieza tu busqueda</button>
      </div>
    </div>
  )
}

export default InicioPart1
