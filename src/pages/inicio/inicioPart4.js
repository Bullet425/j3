import React from "react"

import styles from "../../css/inicioPart4.module.css"
import icon2 from "../../images/icon2.png"

const InicioPart4 = () => {
  return (
    <div className={styles.containerall}>
      <div className={styles.containerLeft}>
        {/* <div className={styles.pulse}>
          <img className={styles.ima} src={icon1} />
        </div> */}
        <div className={`${styles.spinner} ${styles.spinner1}`}>
          {/* <p className={styles.spinertext}>Creatividad</p> */}
          <img className={styles.spinertext} src={icon2} />
        </div>
      </div>
      <div className={styles.containerRight}>
        <h2 className={styles.hola}>Hola Mundo</h2>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleifend, est eget volutpat auctor, nibh risus
          faucibus magna, a elementum est nibh id sapien. Mauris vehicula
          pellentesqueas.
        </p>
        {/* <button className={`${styles.botones} ${styles.boton1}`}>Boton1</button>
          <button className={`${styles.botones} ${styles.boton2}`}>Boton1</button>
          <button className={`${styles.botones} ${styles.boton3}`}>Boton1</button>
  
          <button className={`${styles.botones} ${styles.transparent}`}>
            <p>
              <span className={styles.bg}></span>
              <span className={styles.text}>Hola Mundo</span>
            </p>
          </button> */}
      </div>
    </div>
  )
}

export default InicioPart4
