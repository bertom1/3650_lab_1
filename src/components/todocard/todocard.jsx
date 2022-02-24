//reusable component for todo items. Displays information as well as actions available on current task (check off, delete, etc)
import "./todocard.css"
const TodoCard = (props) => {
    return <div className='todocard'>
        <li className="cardItem">{props.item}</li>
    </div>
} 

export default TodoCard


