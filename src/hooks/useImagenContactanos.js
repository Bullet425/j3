import { graphql, useStaticQuery } from "gatsby"

const useImagenContactanos = () => {
  const imagen = useStaticQuery(graphql`
    query {
      allDatoCmsContacto(filter: { slug: { eq: "contactanos" } }) {
        nodes {
          imagen1 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return imagen.allDatoCmsContacto.nodes[0]
}

export default useImagenContactanos
