import React from 'react'
import styled from 'styled-components'

import Card from '../components/card'

const Description = styled.p`
  color: silver;
`

export default ({ event: { date, title } }) => (
  <Card title={title}>
    <Description>{date}</Description>
  </Card>
)
