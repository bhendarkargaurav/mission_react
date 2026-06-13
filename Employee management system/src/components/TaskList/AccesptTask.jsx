import React from 'react'

const AccesptTask = ({data}) => {
  // console.log(data.taskTitle)
  return (
    <div className='shrink-0 rounded-xl h-full w-75 p-5 bg-yellow-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription} </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-600 py-1 px-2 text-sm '>Mark as Completed</button>
                <button className='bg-red-700 py-1 px-2 text-sm '>Mark as Failed</button>
            </div>
        </div>
    // <div><h1>accepted task</h1></div>

  )
}

export default AccesptTask