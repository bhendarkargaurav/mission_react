import React, {useContext} from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {

    // const username = useContext(DataContext)
    const data = useContext(DataContext)
  return (
    <div>
        <h3>This is section {data.city}</h3>
    </div>
  )
}

export default Section