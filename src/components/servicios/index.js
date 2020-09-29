import React from "react"
import ServiciosPart1 from "./serviciosPart1"
import ServiciosPart2 from "./serviciosPart2"
import ServiciosPart3 from "./serviciosPart3"
import ServiciosPart4 from "./serviciosPart4"

const ServiciosContainer = () => {
  return (
    <>
      <section>
        <ServiciosPart1 />
      </section>

      <section>
        <ServiciosPart2 />
      </section>

      <section>
        <ServiciosPart3 />
      </section>

      <section>
        <ServiciosPart4 />
      </section>
    </>
  )
}

export default ServiciosContainer
