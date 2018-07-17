import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid gray;
  margin: 0 0.5rem;
  padding: 1rem;
`

const Image = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h2`
  color: #222;
`

class CardComponent extends Component {
  renderImage() {
    const { image, title } = this.props

    if (image) {
      return (
        <Image>
          <img src={image} alt={title} title={title} />
        </Image>
      )
    }
  }

  render() {
    const { children, title } = this.props

    return (
      <Card>
        {this.renderImage()}
        <Title>{title}</Title>
        {children}
      </Card>
    )
  }
}

export default CardComponent
