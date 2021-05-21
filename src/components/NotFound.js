import React, { Component } from 'react'
import data from '../animations/404.json'
import LottieControl from './LottieControl'


class NotFound extends Component {
  render() {
    return (
      <div>
          <LottieControl animation={data} style={{backgroundSize: "cover"}} width={600} />
      </div>
    )
  }
}

export default NotFound