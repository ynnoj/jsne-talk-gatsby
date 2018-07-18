import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import List from '../components/list'
import ListItem from '../components/item'
import Title from '../components/title'

const Speaker = styled.div`
  margin-right: 2rem;
  width: 70%;
`

const Talks = styled.div`
  width: 30%;
`

export default ({
  data: {
    contentfulSpeaker: {
      avatar: {
        sizes: { src: image },
      },
      description: {
        childMarkdownRemark: { html: description },
      },
      name,
      talk,
    },
  },
}) => (
  <Layout horizontal>
    <Speaker>
      <img src={image} alt={name} title={name} />
      <Title title={name} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </Speaker>
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

export const query = graphql`
  query speakerQuery($slug: String!) {
    contentfulSpeaker(slug: { eq: $slug }) {
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
      name
      talk {
        id
        slug
        title
      }
    }
  }
`
