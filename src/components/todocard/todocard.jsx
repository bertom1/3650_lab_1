//reusable component for todo items. Displays information as well as actions available on current task (check off, delete, etc)
import "./todocard.css"
import {IoTrashOutline, IoCheckmarkCircleOutline} from 'react-icons/io5'
import { useState } from "react"

const TodoCard = ({id, task, change, remove, complete}) => {
    const date = new Date().toLocaleDateString().split('/');
    const currDate = `${date[2]}-${date[0].length < 2 ? '0'+date[0] : date[0]}-${date[1].length < 2 ? '0'+date[1] : date[1]}`
    const [color, setColor] = useState('empty')
    const handleChange = e => {
        setColor(e.target.value)
    }
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
    return <li className="todoCard">
                <select className={`${color} priority`} onChange={handleChange} >
                    <option value={'empty'} className='empty'>No Priority</option>
                    <option value={'red'} className='red'>High</option>
                    <option value={'yellow'} className='yellow'>Medium</option>
                    <option value={'green'} className='green'>Low</option>
                </select>
                <div >
                    <div className="taskName">{task.taskName}</ div>
                    <div style={{width:'max-content'}}>Due By:
                        <input className='inputField' name='taskDate' type={'date'} min={currDate} value={task.taskDate} onChange={(e) => change(e, id)}/>
                    </ div>
                </div>
            <div>
                <button className='cardBtn'type='button' onClick={() => complete(id)}>
                    <IoCheckmarkCircleOutline size='20'style={{color:'green'}}/>
                </button>
                <button className='cardBtn' type='button' onClick={() => remove(id)}>
                    <IoTrashOutline size='20' style={{color: "red"}}/>
                </button>
            </div>
        </li>
} 

export default TodoCard


