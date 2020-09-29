import React from "react"
import styles from "../../css/inicio/inicioPart2.module.css"
import useImageInicio from "../../hooks/useImageInicio"
import BackgroundImage from "gatsby-background-image"

const InicioParte2 = () => {
  const imagen = useImageInicio()

  const { imagen2 } = imagen

  return (
    <div className={styles.containerall}>
      <div className={styles.containerLeft}>
        <div className={styles.textContainer}>
          <h2 className={styles.hola}>Hola Mundo</h2>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
            rhoncus massa. Quisque eleifend, est eget volutpat auctor, nibh
            risus faucibus magna, a elementum est nibh id sapien. Mauris
            vehicula pellentesque purus non posuere. In hac habitasse platea
            dictumst.
          </p>
        </div>
      </div>
      <div className={styles.containerRight}>
        <BackgroundImage
          tag="section"
          fluid={imagen2.fluid}
          className={styles.ima}
          fadeIn="soft"
        ></BackgroundImage>
      </div>
    </div>
  )
}

export default InicioParte2
