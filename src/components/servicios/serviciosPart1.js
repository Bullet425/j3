import React from "react"
import styles from "../../css/servicios/serviciosPart1.module.css"
import BackgroundImage from "gatsby-background-image"
import useImagenServicios from "../../hooks/useImagenServicios"

const ServiciosPart1 = () => {
  const imagen = useImagenServicios()

  const { imagen1 } = imagen

  return (
    <BackgroundImage
      tag="section"
      fluid={imagen1.fluid}
      className={styles.container}
      fadeIn="soft"
    >
      <div className={styles.containerImageTextBox}>
        <p className={styles.title}>Servicios</p>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleif.
        </p>
      </div>
    </BackgroundImage>
  )
}

export default ServiciosPart1
