import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Grid from '../components/grid'
import Layout from '../components/layout'
import Talk from '../components/talk'
import Title from '../components/title'

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`

export default ({
  data: {
    allContentfulTalk: { edges: talks },
  },
}) => (
  <Layout>
    <Title title="Talks" />
    <Grid>
      {talks.map(({ node: talk }) => {
        return (
          <StyledLink to={`/talks/${talk.slug}`} key={talk.id}>
            <Talk talk={talk} />
          </StyledLink>
        )
      })}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulTalk {
      edges {
        node {
          date(formatString: "DD/MM/YY")
          id
          slug
          speaker {
            name
          }
          title
        }
      }
    }
  }
`
