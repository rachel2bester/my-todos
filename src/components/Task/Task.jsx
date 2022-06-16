import React from 'react'
import "./Task.scss"

const Task = (props) => {
    const {title, onDelete, id} = props
    console.log(id)
    return (
        <div className="task">
            <h1 className='task__title'>{title}</h1>
            <button onClick={onDelete} id={id} className='task__button'>Delete</button>
        </div>
    )
}

export default Task