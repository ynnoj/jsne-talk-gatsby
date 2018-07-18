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

const StyledLink = styled(Link)`
  color: white;
  padding: 0 0.5rem;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
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
      <StyledLink to="/talks" activeClassName="active">
        Talks
      </StyledLink>
      <StyledLink to="/speakers" activeClassName="active">
        Speakers
      </StyledLink>
    </Nav>
  </Header>
)
