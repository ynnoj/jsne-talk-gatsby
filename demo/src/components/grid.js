import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  margin: 0 -0.5rem;
`

export default ({ children }) => <Grid>{children}</Grid>
