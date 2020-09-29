import React from "react"
import styles from "../../css/inicio/inicioPart5.module.css"
import useImageInicio from "./../../hooks/useImageInicio"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const InicioPart5 = () => {
  const imagen = useImageInicio()

  const { imagen5 } = imagen
  return (
    <BackgroundImage
      fluid={imagen5.fluid}
      className={styles.container}
      tag="section"
      fadeIn="soft"
    >
      <div className={styles.textContainer}>
        <p className={styles.title}>Contactanos</p>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleif.
        </p>
        <Link to="/contactanos">
          <button className={styles.button}>Empieza tu busqueda</button>
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default InicioPart5
