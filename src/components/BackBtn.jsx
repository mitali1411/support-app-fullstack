import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = ({url}) => {
  return (
    <Link to={url} className="fa-solid fa-arrow-left-long text-decoration-none text-dark"></Link>
  )
}

export default BackBtn