import React from 'react'
import AccesptTask from './AccesptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {

  return (
    <div id='tasklist' className='h-[45%] overflow-x-auto flex items-center justify-start gap-4 py-5 w-full  '>

        {data.data.tasks.map((elem, idx) => {
            if(elem.active) {
                return <AccesptTask key={idx} data={elem} />
            }
            if(elem.newTask) {
                return <NewTask key={idx} data={elem} />
            }
            if(elem.completed) {
                return <CompleteTask key={idx} data={elem} />
            }
            if(elem.failed) {
                return <FailedTask key={idx} data={elem}/>
            }
        })}

        {/* <AccesptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask /> */}

        {/* starting phase */}
        {/* <div className='flex-shrink-0 rounded-xl h-full w-[300px] p-5 bg-blue-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>{data.data.tasks[2].taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.data.tasks[2].taskTitle}</h2>
            <p className='text-sm mt-2'> {data.data.tasks[2].taskDescription}</p>
        </div> */}

         
    </div>
  )
}

export default TaskList