import React from "react"
import styles from "../../css/contactanos/contactanosPart1.module.css"
import BackgroundImage from "gatsby-background-image"
import useImagenContactanos from "../../hooks/useImagenContactanos"

const ContactanosPart1 = () => {
  const imagen = useImagenContactanos()

  const { imagen1 } = imagen

  return (
    <BackgroundImage
      tag="section"
      fluid={imagen1.fluid}
      className={styles.container}
      fadeIn="soft"
    >
      <div className={styles.containerImageTextBox}>
        <p className={styles.title}>Contactanos</p>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          elit ligula, vitae placerat sem pellentesque sodales. Nulla quis
          rhoncus massa. Quisque eleif. Massatina peri.
        </p>
        <div className={styles.containerInfo}>
          <p>Telefono: 722-350-1229</p>
          <p>Correo: javier?mtze@hotmail.com</p>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default ContactanosPart1
