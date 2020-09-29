import React from "react"
import styles from "../../css/servicios/serviciosPart2.module.css"
import useImagenServicios from "../../hooks/useImagenServicios"
import BackgroundImage from "gatsby-background-image"

const ServiciosPart2 = () => {
  const imagen = useImagenServicios()

  const { imagen2 } = imagen

  console.log(imagen2)

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.containerTextBox}>
          <h2 className={styles.title}>Hola Mundo</h2>
          <p className={styles.text}>
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
        {/* <img className={styles.imagePosition} src={image} /> */}
        <BackgroundImage
          fluid={imagen2.fluid}
          tag="section"
          className={styles.imagePosition}
          fadeIn="soft"
        />
      </div>
    </div>
  )
}

export default ServiciosPart2
