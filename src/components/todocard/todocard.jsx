//reusable component for todo items. Displays information as well as actions available on current task (check off, delete, etc)
import "./todocard.css"
import {IoTrashOutline, IoCheckmarkCircleOutline} from 'react-icons/io5'

const TodoCard = ({id, task, remove, complete}) => {
    const months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': "Mar", 
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sept',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    }
    const formatDate = () => {
        let dateArr = task.taskDate.split('-')
        return `${months[dateArr[1]]} ${dateArr[2]}, ${dateArr[0]}`
    }
    return <div className='todocard'>
        <li className="cardItem">
            <button type='button' onClick={() => complete(id)}>
                <IoCheckmarkCircleOutline style={{color:'green'}}/>
            </button>
            {task.taskName}
            {task.taskDate && ` Due By ${formatDate()}`}
            <button type='button' onClick={() => remove(id)}>
                <IoTrashOutline style={{color: "red"}}/>
            </button>
        </li>
    </div>
} 

export default TodoCard


