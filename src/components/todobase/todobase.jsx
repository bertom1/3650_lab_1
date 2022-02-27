//for displaying a collection of todo tasks, should hold all current tasks (array of objects maybe)

import { useState } from "react"
import { ToDoCard } from "../todocard";
import './todo.css'

const Todo = () => {
    //default value for new task form
    const blankTask = {taskName: '', taskDate:''}
    //<-----hooks----->
    const [tasks, setTasks] = useState([{taskName: "random", taskDate: '1/2/3'} ]);
    const [newTask, setNewTask] = useState(blankTask)
    const [add, setAdd] = useState(false)
    //<-----event handlers----->
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
    /*searches current task list and removes the task that matches the target ID (target ID is the current index of the task to be deleted)
    once task is removed and state is updated, a rerender is triggered which updates the indexs of each task as they are rendered with the map function below
    allows deleting tasks without having to manually update indexes
    */
    const deleteTask = (targetId) => {
        let updatedTasks = tasks.filter((_, index) => index !== targetId)
        setTasks(updatedTasks)
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
            {tasks.map((task, index) => {
                //Pass task object items as props to the card component
                //add delete function to propchain to trigger delete action from within the component
                return <ToDoCard key = {index} index={index} item={task.taskName} date={task.taskDate} delete={deleteTask}/>
            })}
        </ul>
    </div>
}

export default Todo