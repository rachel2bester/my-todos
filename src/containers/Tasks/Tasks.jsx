import React, {useEffect} from 'react'
import "./Tasks.scss"
import NewTask from '../../components/NewTask/NewTask'
import Task from '../../components/Task/Task'

const Tasks = (props) => {
    const {tasks, onNewTask} = props

    return (
        
        <div className='tasks'>
            <NewTask onNewTask={onNewTask}/>

            {tasks.map((task, index) => {
                return <Task key={index} title={task}/>
            })}

        </div>
    )
}

export default Tasks