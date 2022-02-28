//reusable component for todo items. Displays information as well as actions available on current task (check off, delete, etc)
import "./todocard.css"
import {IoTrashOutline, IoCheckmarkCircleOutline} from 'react-icons/io5'

const TodoCard = ({id, task, remove, complete}) => {
    return <div className='todocard'>
        <li className="cardItem">
            <button type='button' onClick={() => complete(id)}>
                <IoCheckmarkCircleOutline style={{color:'green'}}/>
            </button>
            {task.taskName}
            <button type='button' className="deleteButton" onClick={() => remove(id)}>
                <IoTrashOutline style={{color: "red"}}/>
            </button>
        </li>
    </div>
} 

export default TodoCard


