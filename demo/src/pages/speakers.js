import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Grid from '../components/grid'
import Layout from '../components/layout'
import Speaker from '../components/speaker'
import Title from '../components/title'

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`

export default ({
  data: {
    allContentfulSpeaker: { edges: speakers },
  },
}) => (
  <Layout>
    <Title title="Speakers" />
    <Grid>
      {speakers.map(({ node: speaker }) => {
        return (
          <StyledLink to={`/speakers/${speaker.slug}`} key={speaker.id}>
            <Speaker speaker={speaker} />
          </StyledLink>
        )
      })}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulSpeaker {
      edges {
        node {
          avatar {
            sizes(maxWidth: 200, quality: 100) {
              src
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          id
          name
          slug
        }
      }
    }
  }
`
