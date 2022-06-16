import React, {useEffect} from 'react'
import "./Tasks.scss"
import NewTask from '../../components/NewTask/NewTask'
import Task from '../../components/Task/Task'

const Tasks = (props) => {
    const {tasks, onNewTask, onDeleteTask} = props

    return (
        
        <div className='tasks'>
            <NewTask onNewTask={onNewTask}/>
            {tasks.map((task, index) => {
                return <Task key={index} id={index} title={task} onDelete={onDeleteTask}/>
            })}

        </div>
    )
}

export default Tasks