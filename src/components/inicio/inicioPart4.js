import React from "react"
import styles from "../../css/inicio/inicioPart4.module.css"
import useImageInicio from "../../hooks/useImageInicio"
import BackgroundImage from "gatsby-background-image"

const InicioPart4 = () => {
  const imagen = useImageInicio()

  const { imagen4 } = imagen
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Hola Mundo</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
            rhoncus massa. Quisque eleifend, est eget volutpat auctor, nibh
            risus faucibus magna, a elementum est nibh id sapien. Mauris
            vehicula pellentesqueas.
          </p>
        </div>
      </div>
      <div className={styles.containerRight}>
        <BackgroundImage
          fluid={imagen4.fluid}
          className={styles.ima}
          tag="section"
          fadeIn="soft"
        ></BackgroundImage>
      </div>
    </div>
  )
}

export default InicioPart4
