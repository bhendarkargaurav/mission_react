import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
    }else if(email=='user@me.com' && password == '123') {
      setUser('employee')
    }
    else {
      alert("Invalid Credentials")
    }
}

 const data = useContext(AuthContext)
 console.log(data);
  
  
  return (
    <>
   // we want as some one login accourding to dashboard should open if employee login employee dashboard open and if admin login admin dashboad open 
    {!user ? < Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard />}

    {/* <EmployeeDashboard /> */}
    {/* < AdminDashboard /> */}
    </>
  )
}

export default App