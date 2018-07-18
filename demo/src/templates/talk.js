import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import Title from '../components/title'

const Talk = styled.div`
  margin-right: 2rem;
  width: 70%;
`

const Meta = styled.div`
  width: 30%;
`

export default ({
  data: {
    contentfulTalk: {
      title,
      description: {
        childMarkdownRemark: { html: description },
      },
      event,
      speaker: { name, slug },
    },
  },
}) => (
  <Layout horizontal>
    <Talk>
      <Title title={title} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </Talk>
    <Meta>
      <Title title="Speaker" />
      <Link to={`/speakers/${slug}`}>{name}</Link>
      <Title title="Event" />
      <Link to={`/events/${event.slug}`}>{event.title}</Link>
    </Meta>
  </Layout>
)

export const query = graphql`
  query talkQuery($slug: String!) {
    contentfulTalk(slug: { eq: $slug }) {
      description {
        childMarkdownRemark {
          html
        }
      }
      event {
        slug
        title
      }
      title
      speaker {
        name
        slug
      }
    }
  }
`
