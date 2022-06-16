import React, {useState} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Tasks from './containers/Tasks/Tasks';

function App() {

    const [tasks, setTasks] = useState([]);

    const onNewTask = (event) => {
        event.preventDefault();
        setTasks(tasks.concat([event.target.newTaskTitle.value]))
        event.target.reset();
    }

    const onReset = () => {
        setTasks([])
    }

    const onDeleteTask = (event) => {
        console.log(event.target.id)
        setTasks(
            tasks.filter((task, index) => index != event.target.id)
        )
    }

    return (
        <div className="App">
            <Header onReset={onReset}/>
            <Tasks tasks={tasks} onDeleteTask={onDeleteTask} onNewTask={onNewTask}/>
        </div>
    );
}

export default App;
