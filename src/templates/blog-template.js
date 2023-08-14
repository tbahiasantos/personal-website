import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import './css/blog-template.css'

export default function BlogTemplate({ data = {} }) {
  const { markdownRemark } = data

  if (!markdownRemark) {
    return (
      <Layout>
        <h1>Erro: Nenhum post encontrado!</h1>
      </Layout>
    )
  }

  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <h1 className="blog-post-title">{frontmatter.title}</h1>
        <h2 className="blog-post-date">{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
