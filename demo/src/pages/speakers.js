import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Grid from '../components/grid'
import Layout from '../components/layout'
import Speaker from '../components/speaker'
import Title from '../components/title'

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
          <Link
            to={`/speakers/${speaker.slug}`}
            key={speaker.id}
            style={{
              color: 'currentColor',
              textDecoration: 'none',
            }}
          >
            <Speaker speaker={speaker} />
          </Link>
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
