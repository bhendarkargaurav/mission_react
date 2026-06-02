import React, { createContext } from 'react'

export const DataContext = createContext()



const UserContext = ({children}) => {

    // const userData = {
    //     username:"Gaurav",
    //     age: 24,
    //     city: "Nagpur"
    // }
    const username = "Gaurav bhendarkar"

  return (
    <div>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext