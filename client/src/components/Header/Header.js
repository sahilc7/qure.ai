import React from 'react'
import './Header.styl'
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <header>
      <strong>
        <Link to='/'> Qure.ai </Link>
      </strong>
    </header>
  )
}
