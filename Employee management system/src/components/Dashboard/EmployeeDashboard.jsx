import React from 'react'
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      
        <Header changeuser={props.changeuser} data={props.data} />
        <TaskNumberList data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard