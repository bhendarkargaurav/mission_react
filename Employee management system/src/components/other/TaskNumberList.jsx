import React from 'react'

const TaskNumberList = ({data}) => {
    // console.log("data is ",data)
    // console.log("inside data", data.data.taskCounts)
  return (
    <div className='flex justify-between gap-5 screen py-6 '>
        <div className=' rounded-xl py-6 px-9 w-[45%] bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>newTask</h3>
        </div>

        <div className=' rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>active</h3>
        </div>

        <div className=' rounded-xl py-6 px-9 w-[45%] bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>completed</h3>
        </div>

        <div className=' rounded-xl py-6 px-9 w-[45%] bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>failed</h3>
        </div>

    </div>
  )
}

export default TaskNumberList