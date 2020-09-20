import React from "react"
import styles from "../../css/inicioContainer.module.css"
import InicioPart1 from "./inicioPart1"
import InicioPart2 from "./inicioPart2"
import InicioPart3 from "./inicioPart3"
import InicioPart4 from "./inicioPart4"
import InicioPart5 from "./inicioPart5"
import InicioPart6 from "./inicioPart6"

const InicioContainer = () => {
  return (
    <div className={styles.parallaxWorld}>
      <section>
        <InicioPart1 />
      </section>

      <section>
        <InicioPart2 />
      </section>

      <section>
        <InicioPart3 />
      </section>

      <section>
        <InicioPart4 />
      </section>

      <section>
        <InicioPart5 />
      </section>

      <section>
        <InicioPart6 />
      </section>
    </div>
  )
}

export default InicioContainer
