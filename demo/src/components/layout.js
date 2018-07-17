import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'

import Header from './header'

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  padding: 1rem;
`

export default ({ horizontal, children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper horizontal={horizontal}>{children}</Wrapper>
      </>
    )}
  />
)
