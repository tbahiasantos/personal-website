// src/pages/blog.js

import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import './css/blog.css'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <Link key={edge.node.id} to={edge.node.frontmatter.path} className="blog-post-link">
        <div className="blog-card blog-post">
          <h2 className="blog-card-title">{edge.node.frontmatter.title}</h2>
          <p className="blog-card-meta">{edge.node.frontmatter.date}</p>
          <p className="blog-card-excerpt">{edge.node.excerpt}</p>
          <div className="blog-card-categories">
            {edge.node.frontmatter.categories.map((category, index) => (
              <span key={index} className="blog-card-category">{category}</span>
            ))}
          </div>
        </div>

      </Link>
    ));

  return (
    <Layout>
      <div className="blog-cover">
        <StaticImage
          src="../images/blog-cover.jpg"
          alt="Capa do Blog"
          placeholder="blurred"
          layout="fullWidth"
          class="blog-cover-image"
        />
        <h2 className="blog-cover-title">Pensamentos &amp; Experiências</h2>
        <hr className="blog-divider" />
      </div>
      <div className="blog-posts">
        {Posts}
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
query {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          categories
        }
      }
    }
  }
}
`
