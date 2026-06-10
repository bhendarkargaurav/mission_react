import React, { createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
import { useState } from 'react'
import { useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(() => getLocalStorage())

  useEffect(() => {
    const data = getLocalStorage();
    
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
  }, [])
  

  
// console.log(data.admin);

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider