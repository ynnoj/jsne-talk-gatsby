import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Grid from '../components/grid'
import Layout from '../components/layout'
import Event from '../components/event'
import Title from '../components/title'

class EventsPage extends Component {
  render() {
    const events = this.props.data.allContentfulEvent.edges

    return (
      <Layout>
        <Title title="Events" />
        <Grid>
          {events.map(({ node: event }) => {
            return (
              <Link
                to={`/events/${event.slug}`}
                key={event.id}
                style={{
                  color: 'currentColor',
                  textDecoration: 'none',
                }}
              >
                <Event event={event} />
              </Link>
            )
          })}
        </Grid>
      </Layout>
    )
  }
}

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

export default EventsPage
