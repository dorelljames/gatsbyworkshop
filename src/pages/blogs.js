import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogsPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(blog => (
      <section id="one">
        <div className="inner">
          <header>
            <h2>{blog.node.frontmatter.title}</h2>
          </header>
          <p>
            <p
              key={`body`}
              id="___gatsby"
              dangerouslySetInnerHTML={{
                __html: blog.node.frontmatter.shortdescription,
              }}
            />
          </p>
          <ul className="actions">
            <li>
              <Link
                to={"blog/" + blog.node.frontmatter.path}
                className="button alt"
              >
                Learn More
              </Link>
            </li>
          </ul>
        </div>
      </section>
    ))}
  </Layout>
)

export default BlogsPage

export const query = graphql`
  query BlogPage {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            shortdescription
          }
          html
        }
      }
    }
  }
`
