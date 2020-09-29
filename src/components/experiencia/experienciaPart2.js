import React from "react"
import styles from "../../css/experiencia/experienciaPart2.module.css"
import useImagenExperiencia from "../../hooks/useImagenExperiencia"
import BackgroundImage from "gatsby-background-image"

const ExperienciaPart2 = () => {
  const imagen = useImagenExperiencia()

  const { imagen2 } = imagen
  return (
    <div className={styles.container}>
      <h1 className={styles.cardContainerTitle}>Nuestro Trabajo</h1>
      <div className={styles.line}></div>
      <div className={styles.cardContainer}>
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at posuere eros. Interdum et malesuada fames ac ante ipsum.
            </div>
          </div>
          <div className={styles.cardIcon}>
            <BackgroundImage
              fluid={imagen2.fluid}
              className={styles.cardIconImage}
              tag="section"
              fadeIn="soft"
            />
          </div>
          <div className={styles.cardTextContainer}>
            <div className={styles.title}>PERSONAL</div>
            <div className={styles.price}>$19.99</div>
          </div>
          <div className={styles.cardButtonContainer}>
            <button className={styles.cardButton}>Ver mas</button>
          </div>
        </section>
        <section className={styles.card}>
          <div className={styles.cardIcon}>
            <BackgroundImage
              fluid={imagen2.fluid}
              className={styles.cardIconImage}
              tag="section"
              fadeIn="soft"
            />
          </div>
          <div className={styles.cardHeader}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at posuere eros. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </div>
          </div>
          <div className={styles.cardTextContainer}>
            <div className={styles.title}>TEAM EDITION</div>
            <div className={styles.price}>$4.99</div>
          </div>
          <div className={styles.cardButtonContainer}>
            <button className={styles.cardButton}>Ver mas</button>
          </div>
        </section>
        <section className={styles.card}>
          <div className={styles.cardIcon}>
            <BackgroundImage
              fluid={imagen2.fluid}
              className={styles.cardIconImage}
              tag="section"
              fadeIn="soft"
            />
          </div>
          <div className={styles.cardHeader}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at posuere eros. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </div>
          </div>
          <div className={styles.cardTextContainer}>
            <div className={styles.title}>TEAM EDITION</div>
            <div className={styles.price}>$4.99</div>
          </div>
          <div className={styles.cardButtonContainer}>
            <button className={styles.cardButton}>Ver mas</button>
          </div>
        </section>
        <section className={styles.card}>
          <div className={styles.cardIcon}>
            <BackgroundImage
              fluid={imagen2.fluid}
              className={styles.cardIconImage}
              tag="section"
              fadeIn="soft"
            />
          </div>
          <div className={styles.cardHeader}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at posuere eros. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </div>
          </div>
          <div className={styles.cardTextContainer}>
            <div className={styles.title}>TEAM EDITION</div>
            <div className={styles.price}>$4.99</div>
          </div>
          <div className={styles.cardButtonContainer}>
            <button className={styles.cardButton}>Ver mas</button>
          </div>
        </section>
        <section className={styles.card}>
          <div className={styles.cardIcon}>
            <BackgroundImage
              fluid={imagen2.fluid}
              className={styles.cardIconImage}
              tag="section"
              fadeIn="soft"
            />
          </div>
          <div className={styles.cardHeader}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at posuere eros. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </div>
          </div>
          <div className={styles.cardTextContainer}>
            <div className={styles.title}>TEAM EDITION</div>
            <div className={styles.price}>$4.99</div>
          </div>
          <div className={styles.cardButtonContainer}>
            <button className={styles.cardButton}>Ver mas</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ExperienciaPart2
