//reusable component for todo items. Displays information as well as actions available on current task (check off, delete, etc)
import "./todocard.css"
import {IoTrashOutline} from 'react-icons/io5'
const TodoCard = (props) => {
    return <div className='todocard'>
        <li className="cardItem">
            {props.item}
            <button type='button' className="deleteButton" onClick={() => props.delete(props.index)}>
                <IoTrashOutline style={{color: "red"}}/>
            </button>
        </li>
    </div>
} 

export default TodoCard


