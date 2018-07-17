import React from 'react'
import styled from 'styled-components'

import Card from '../components/card'

const Date = styled.p`
  color: silver;
`

const Speaker = styled.p`
  color: gray;
`

export default ({ talk: { date, title, speaker } }) => (
  <Card title={title}>
    <Speaker>{speaker.name}</Speaker>
    <Date>{date}</Date>
  </Card>
)
