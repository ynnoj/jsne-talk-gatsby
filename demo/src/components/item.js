import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`

export default ({ children }) => <Item>{children}</Item>
