import React from 'react'
import "./Task.scss"

const Task = (props) => {
    const {title} = props
    return (
        <div className="task">
            <h1>{title}</h1>
            <button>Trash</button>
        </div>
    )
}

export default Task