import React from 'react'
import "./NewTask.scss"

const NewTask = (props) => {
    const {onNewTask} = props
    return (
        
        <form className='new-task' onSubmit={onNewTask}>
            <label className="new-task__label" htmlFor="new-task">New Task</label>
            <input className="new-task__input" type="text" id="new-task" name="newTaskTitle"/>
            <button className="new-task__button" type="submit">+</button>
        </form>
        
    )
}

export default NewTask