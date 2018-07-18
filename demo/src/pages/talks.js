import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Grid from '../components/grid'
import Layout from '../components/layout'
import Talk from '../components/talk'
import Title from '../components/title'

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
          <Link
            to={`/talks/${talk.slug}`}
            key={talk.id}
            style={{
              color: 'currentColor',
              textDecoration: 'none',
            }}
          >
            <Talk talk={talk} />
          </Link>
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
