import React from "react"
import styles from "../../css/inicioPart5.module.css"

const InicioPart5 = () => {
  return (
    <div className={styles.parallaxFour}>
      <div className={styles.containerRight}>
        <p className={styles.title}>Contactanos</p>
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

export default InicioPart5
