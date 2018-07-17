import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0;
  padding: 0;
`

export default ({ children }) => <List>{children}</List>
