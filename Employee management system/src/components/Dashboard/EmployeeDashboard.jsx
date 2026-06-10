import React from 'react'
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (data) => {
  // console.log(props)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      
        <Header data={data} />
        <TaskNumberList data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard