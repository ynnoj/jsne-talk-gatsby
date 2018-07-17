import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  align-items: center;
  background-color: rebeccapurple;
  display: flex;
  flex: auto;
  justify-content: space-between;
  padding: 1rem;
`

const Title = styled.h1`
  color: white;
  margin-right: 2rem;
`

const Nav = styled.nav`
  margin: 0 -0.5rem;
`

export default ({ siteTitle }) => (
  <Header>
    <Title>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </Title>
    <Nav>
      <Link
        to="/talks"
        style={{
          color: 'white',
          padding: '0 .5rem',
          textDecoration: 'none',
        }}
        activeStyle={{
          textDecoration: 'underline',
        }}
      >
        Talks
      </Link>
      <Link
        to="/speakers"
        style={{
          color: 'white',
          padding: '0 .5rem',
          textDecoration: 'none',
        }}
        activeStyle={{
          textDecoration: 'underline',
        }}
      >
        Speakers
      </Link>
    </Nav>
  </Header>
)
