import { graphql, useStaticQuery } from "gatsby"

const useImagenServicios = () => {
  const imagen = useStaticQuery(graphql`
    query {
      allDatoCmsServicio(filter: { slug: { eq: "servicios" } }) {
        nodes {
          imagen1 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          imagen2 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          imagen3 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          imagen4 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return imagen.allDatoCmsServicio.nodes[0]
}

export default useImagenServicios
