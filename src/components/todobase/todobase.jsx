//for displaying a collection of todo tasks, should hold all current tasks (array of objects maybe)

import { useState } from "react"
import { ToDoCard } from "../todocard";
import './todo.css'

const Todo = () => {
    //default value for new task form
    const blankTask = {taskNake: '', taskDate:''}
    //hooks for managing tasks and task values
    const [tasks, setTasks] = useState([{taskName: "random", taskDate: '1/2/3'}]);
    const [newTask, setNewTask] = useState(blankTask)
    const [add, setAdd] = useState(false)
    //event handlers
    //hides new task form and resets form to default value
    const cancelAdd = () => {
        setAdd(false)
        setNewTask(blankTask)
    }
    //update new task object with changes made in the task form
    //uses e.target.name and value for function reusability, only updates the altered field 
    const handleChange = (e)=> {
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }
    //adds new task to the task list. Hides task form and resets task form to default value.
    const submitTask =(e) => {
        e.preventDefault();
        setTasks([...tasks, newTask])
        setNewTask(blankTask);
        setAdd(false)
    }
    return <div className="todo">
        {/* conditional render for add task button, button action depends on state of adding setTasks
        Display as a cancel button if a new task is in progress, otherwise display as an add button */}
        {add ? 
        <button type='button' onClick={cancelAdd}>Cancel</button>
        : 
        <button type='button' onClick={() => setAdd(true)}>Add New Task</button>
        }
        <ul className="itemList">
            {/* conditional render for new task box
            display a task input box at the top of the task list when add is set to true, otherwise dont render */}
            {add && 
            <li>
                <form onSubmit={submitTask}>
                    <label>Task Name: 
                        <input name="taskName" required={true} type={'text'} onChange={handleChange}/>
                    </label>
                    <button type='submit' >Add Task</button>
                </form>
            </li>}
            {tasks.map((task, k) => {
                return <ToDoCard key = {k} item={task.taskName} date={task.taskDate} />
            })}
        </ul>
    </div>
}

export default Todo