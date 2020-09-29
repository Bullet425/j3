import React from "react"
import styles from "../../css/inicio/inicioPart1.module.css"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import useImageInicio from "../../hooks/useImageInicio"

const InicioPart1 = () => {
  const imagenes = useImageInicio()

  const { imagen1 } = imagenes

  return (
    <BackgroundImage
      tag="section"
      fluid={imagen1.fluid}
      className={styles.container}
      fadeIn="soft"
    >
      <div className={styles.textContainer}>
        <p className={styles.title}>J3 Solutions</p>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleif.
        </p>
        <Link to="/servicios">
          <button className={styles.button}>Empieza tu busqueda</button>
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default InicioPart1
