import {IoArrowUndo, IoTrashOutline} from 'react-icons/io5'
import './completed.css'

const completedCard = ({remove, undo, id, task}) => {
return <li className='completedCard'>
        <div >
            <div className='taskName'>
                {task.taskName }
            </div>
        </div>
        <div>
            <button className='cardBtn' type='button' onClick={() => undo(id)}>
                <IoArrowUndo size='20'/>
            </button>
            <button className='cardBtn' type='button' onClick={() => remove(id)}>
                        <IoTrashOutline size='20' style={{color: "red"}}/>
            </button>
        </div>
    </li>
}
export default completedCard