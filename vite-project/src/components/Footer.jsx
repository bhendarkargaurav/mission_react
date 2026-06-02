import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
    const username = useContext(DataContext)
  return (
    <div>
        <h4>the username in footer is {username}</h4>
    </div>
  )
}

export default Footer