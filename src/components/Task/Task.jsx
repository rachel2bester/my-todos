import React from 'react'
import "./Task.scss"
import trash from "./../../assets/images/trash-can-solid.svg"

const Task = (props) => {
    const {title, onDelete, id} = props
    console.log(id)
    return (
        <div className="task">
            <p className='task__title'>{title}</p>
            <img  onClick={onDelete} id={id} className='task__button' src={trash} alt="delete" />
        </div>
    )
}

export default Task