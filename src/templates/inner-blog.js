import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Pic11 from "../images/pic11.jpg"

const InnerBlog = ({ data }) => (
  <Layout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>
      <p
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.frontmatter.shortdescription,
        }}
      />
    </p>
  </Layout>
)

export const query = graphql`
  query markdownRemark($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
        shortdescription
      }
      html
    }
  }
`

export default InnerBlog
