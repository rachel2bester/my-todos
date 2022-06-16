import React from 'react'

const NewTask = (props) => {
    const {onNewTask} = props
    return (
        
        <form onSubmit={onNewTask}>
            <label htmlFor="new-task">New Task</label>
            <input type="text" id="new-task" name="newTaskTitle"/>
            <input type="submit"/>
        </form>
        
    )
}

export default NewTask