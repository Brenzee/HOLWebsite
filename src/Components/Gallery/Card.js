import React from 'react'
import './Card.css'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = { spans: 0 }

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight

    const spans = Math.ceil(height / 10)

    this.setState({ spans })
  }

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          className='img-style'
          ref={this.imageRef}
          src={this.props.src}
          alt='House of Light Restaurant Jurmala Jomas iela'
        />
      </div>
    )
  }
}

export default Card
