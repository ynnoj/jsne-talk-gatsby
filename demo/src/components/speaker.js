import React from 'react'
import styled from 'styled-components'

import Card from '../components/card'

const Description = styled.p`
  color: silver;
`

export default ({
  speaker: {
    avatar: {
      sizes: { src: image },
    },
    description: {
      childMarkdownRemark: { html: description },
    },
    name,
  },
}) => (
  <Card image={image} title={name}>
    <Description dangerouslySetInnerHTML={{ __html: description }} />
  </Card>
)
