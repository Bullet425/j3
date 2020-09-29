import React from "react"
import styles from "../../css/experiencia/experienciaPart1.module.css"
import BackgroundImage from "gatsby-background-image"
import useImagenExperiencia from "../../hooks/useImagenExperiencia"

const ExperienciaPart1 = () => {
  const imagen = useImagenExperiencia()

  const { imagen1 } = imagen

  return (
    <BackgroundImage
      tag="section"
      fluid={imagen1.fluid}
      className={styles.container}
      fadeIn="soft"
    >
      <div className={styles.textContainer}>
        <p className={styles.title}>Experiencia</p>
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

export default ExperienciaPart1
