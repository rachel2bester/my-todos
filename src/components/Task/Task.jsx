import React from 'react'
import "./Task.scss"

const Task = (props) => {
    const {title} = props
    return (
        <div className="task">
            <h1 className='task__title'>{title}</h1>
            <button className='task__button'>Delete</button>
        </div>
    )
}

export default Task