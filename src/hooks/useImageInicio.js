import { graphql, useStaticQuery } from "gatsby"

const useImageInicio = () => {
  const imagen = useStaticQuery(graphql`
    query {
      allDatoCmsInicio(filter: { slug: { eq: "inicio" } }) {
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
          imagen5 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return imagen.allDatoCmsInicio.nodes[0]
}

export default useImageInicio
