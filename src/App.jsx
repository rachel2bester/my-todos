import React, {useState} from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import Tasks from './containers/Tasks/Tasks';

function App() {

    const [tasks, setTasks] = useState(["TASK"]);

    const onNewTask = (event) => {
        event.preventDefault();
        setTasks(tasks.concat([event.target.newTaskTitle.value]))
        event.target.reset();
        console.log(tasks)
    }

    const onReset = () => {
        setTasks([])
    }

    return (
        <div className="App">
            <Header onReset={onReset}/>
            <Tasks tasks={tasks} onNewTask={onNewTask}/>
        </div>
    );
}

export default App;
