import React from 'react'
import { poll_backend } from '../../../declarations/poll_backend'
import Feeds from './Feeds'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">Left</div>
        <Feeds />
        <div className="col-sm-3">Right</div>
      </div>
    </div>
  )
}

export default Home