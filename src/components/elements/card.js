import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
  display: flex;
`

const Container = styled.article`
  flex: 1 1 auto;
  border-radius: 6px;
  box-shadow: var(--medium-shadow);
  font-size: 16px;
  color: var(--black);
  background: var(--white);
`

const Content = styled.div`
  padding: 25px;

  & > * {
    margin: 0 0 10px 0;
  }
`

const Heading = styled.h3`
  color: var(--blue-40);
  font-size: 20px;
`

const Timestamp = styled.p`
  color: var(--gray-20);
  font-size: 13px;
`

const StyledImage = styled(Img)`
  border-radius: 6px 6px 0 0;
`

const Card = ({ link, image, imageAltText, heading, timestamp, content }) => {
  return (
    <>
      <StyledLink to={link}>
        <Container>
          <StyledImage
            sizes={{ ...image, aspectRatio: 21 / 9 }}
            alt={imageAltText}
          />

          <Content>
            <Timestamp>
              {timestamp}
            </Timestamp>

            <Heading>{heading}</Heading>


            <p>{content}</p>
          </Content>
        </Container>
      </StyledLink>
    </>
  )
}

export default Card