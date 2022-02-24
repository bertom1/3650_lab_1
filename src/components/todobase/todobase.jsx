//for displaying a collection of todo tasks, should hold all current tasks (array of objects maybe)

import { useState } from "react"
import { ToDoCard } from "../todocard";
import './todo.css'

const Todo = () => {
    const [tasks, setTask] = useState([{taskName: "random", taskDate: '1/2/3'}]);
    return <div className="todo">
        <ul className="itemList">
            {tasks.map((task, k) => {
                return <ToDoCard key = {k} item={task.taskName} date={task.taskDate} />
            })}
        </ul>
    </div>
}

export default Todo