//reusable component for todo items. Displays information as well as actions available on current task (check off, delete, etc)
import "./todocard.css"
import {IoTrashOutline} from 'react-icons/io5'
const TodoCard = (props) => {
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
        let dateArr = props.date.split('-')
        return `${months[dateArr[1]]} ${dateArr[2]}, ${dateArr[0]}`
    }
    return <div className='todocard'>
        <li >
            {`${props.item}`} 
            {props.date && ` Due By ${formatDate()}`}
            <button type='button' className="deleteButton" onClick={() => props.delete(props.index)}>
                <IoTrashOutline style={{color: "red"}}/>
            </button>
        </li>
    </div>
} 

export default TodoCard


