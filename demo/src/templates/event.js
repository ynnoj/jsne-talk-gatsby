import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import List from '../components/list'
import ListItem from '../components/item'
import Title from '../components/title'

const Event = styled.div`
  margin-right: 2rem;
  width: 70%;
`

const Talks = styled.div`
  width: 30%;
`

class EventTemplate extends Component {
  render() {
    const { date, talk, title } = this.props.data.contentfulEvent

    return (
      <Layout horizontal>
        <Event>
          <Title title={title} />
          <p>{date}</p>
        </Event>
        <Talks>
          <Title title="Talks" />
          <List>
            {talk.map(talk => {
              return (
                <ListItem key={talk.id}>
                  <Link to={`/talks/${talk.slug}`}>{talk.title}</Link>
                </ListItem>
              )
            })}
          </List>
        </Talks>
      </Layout>
    )
  }
}

export default EventTemplate

export const pageQuery = graphql`
  query eventQuery($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      date(formatString: "DD/MM/YY")
      talk {
        id
        slug
        speaker {
          name
        }
        title
      }
      title
    }
  }
`
