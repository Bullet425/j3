import React from "react"
import styles from "../../css/servicios/serviciosPart3.module.css"
import useImagenServicios from "../../hooks/useImagenServicios"
import BackgroundImage from "gatsby-background-image"

const ServiciosPart3 = () => {
  const imagen = useImagenServicios()

  const { imagen3 } = imagen

  return (
    <BackgroundImage
      fluid={imagen3.fluid}
      className={styles.container}
      tag="section"
      fadeIn="soft"
    >
      <div className={styles.containerImageTextBox}>
        <p className={styles.title}>Servicios</p>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleif. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
    </BackgroundImage>
  )
}

export default ServiciosPart3
