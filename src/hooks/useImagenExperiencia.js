import { graphql, useStaticQuery } from "gatsby"

const useImageInicio = () => {
  const imagen = useStaticQuery(graphql`
    query {
      allDatoCmsXp(filter: { slug: { eq: "experiencia" } }) {
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
        }
      }
    }
  `)

  return imagen.allDatoCmsXp.nodes[0]
}

export default useImageInicio
