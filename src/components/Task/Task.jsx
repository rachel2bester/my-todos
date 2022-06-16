import React, {useState} from 'react'
import "./Task.scss"
import trash from "./../../assets/images/trash-can-solid.svg"

const Task = (props) => {
    const {title, onDelete, id} = props

    const [done, setDone] = useState(false)

    const toggleDone = () => {
        setDone(!done)
    }

    console.log(id)
    return (
        <div className="task">
            <input className='' onChange={toggleDone} type="checkbox"/>
            {done ? <p className='task__title done' >{title}</p> : <p className='task__title'>{title}</p> }
            
            <img  onClick={onDelete} id={id} className='task__button' src={trash} alt="delete" />
        </div>
    )
}

export default Task