import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Grid from '../components/grid'
import Layout from '../components/layout'
import Event from '../components/event'
import Title from '../components/title'

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`

export default ({
  data: {
    allContentfulEvent: { edges: events },
  },
}) => (
  <Layout>
    <Title title="Events" />
    <Grid>
      {events.map(({ node: event }) => {
        return (
          <StyledLink to={`/events/${event.slug}`} key={event.id}>
            <Event event={event} />
          </StyledLink>
        )
      })}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulEvent {
      edges {
        node {
          date(formatString: "DD/MM/YY")
          id
          slug
          title
        }
      }
    }
  }
`
