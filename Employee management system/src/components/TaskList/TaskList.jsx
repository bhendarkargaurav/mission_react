import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[45%] overflow-x-auto flex items-center justify-start gap-4 py-5 w-full  '>
        <div className='flex-shrink-0 rounded-xl h-full w-[300px] p-5 bg-yellow-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sit! Officia quo ea animi vero?</p>
        </div>

        <div className='flex-shrink-0 rounded-xl h-full w-[300px] p-5 bg-blue-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sit! Officia quo ea animi vero?</p>
        </div>

        <div className='flex-shrink-0 rounded-xl h-full w-[300px] p-5 bg-green-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sit! Officia quo ea animi vero?</p>
        </div>

        <div className='flex-shrink-0 rounded-xl h-full w-[300px] p-5 bg-red-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sit! Officia quo ea animi vero?</p>
        </div>

        <div className='flex-shrink-0 rounded-xl h-full w-[300px] p-5 bg-blue-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sit! Officia quo ea animi vero?</p>
        </div>

        <div className='shrink-0 rounded-xl h-full w-75 p-5 bg-yellow-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sit! Officia quo ea animi vero?</p>
        </div>
        

       
    </div>
  )
}

export default TaskList