import React from 'react'
import "./Tasks.scss"
import NewTask from '../../components/NewTask/NewTask'
import Task from '../../components/Task/Task'

const Tasks = () => {
    const tasksJSX = <Task key={0} title="New Task"/>;
    return (
        
        <div className='tasks'>
            <NewTask />
            {tasksJSX}

        </div>
    )
}

export default Tasks