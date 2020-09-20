import React, { useState } from "react"
import styles from "../../css/inicioPart2.module.css"
import icon1 from "../../images/icon1.png"

const InicioParte2 = () => {
  return (
    <div className={styles.containerall}>
      <div className={styles.containerLeft}>
        <h2 className={styles.hola}>Hola Mundo</h2>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleifend, est eget volutpat auctor, nibh risus
          faucibus magna, a elementum est nibh id sapien. Mauris vehicula
          pellentesque purus non posuere. In hac habitasse platea dictumst.
        </p>
      </div>
      <div className={styles.containerRight}>
        {/* <button className={`${styles.botones} ${styles.boton1}`}>Boton1</button>
        <button className={`${styles.botones} ${styles.boton2}`}>Boton1</button>
        <button className={`${styles.botones} ${styles.boton3}`}>Boton1</button>

        <button className={`${styles.botones} ${styles.transparent}`}>
          <p>
            <span className={styles.bg}></span>
            <span className={styles.text}>Hola Mundo</span>
          </p>
        </button> */}
        <div className={styles.pulse}>
          <img className={styles.ima} src={icon1} />
        </div>
      </div>
    </div>
  )
}

export default InicioParte2
