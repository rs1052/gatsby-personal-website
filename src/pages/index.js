import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layouts/layout"
import SEO from "../components/elements/seo"
import Navigation from "../components/sections/navigation"
import Hero from "../components/sections/hero"
import BlogSpotlight from "../components/sections/blog-spotlight"
import Button from "../components/elements/button"
import Spacer from "../components/elements/spacer"

const AlignedContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025rem;
  color: var(--gray-900);
  text-align: center;
`


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Navigation />
        <Hero />
        <Spacer />

        <Heading>Latest Blog Posts</Heading>
        <Spacer />

        <BlogSpotlight />
        <Spacer />

        <AlignedContainer>
          <Button to="/blog" label="View All">View All Posts</Button>
        </AlignedContainer>
        <Spacer />
      </Layout>
    </>
  )
}

export default Index


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`