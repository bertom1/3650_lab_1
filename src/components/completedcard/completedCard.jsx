import {IoArrowUndo} from 'react-icons/io5'

const completedCard = ({undo, id, task}) => {
return <li >
        <button onClick={() => undo(id)}>
            <IoArrowUndo />
        </button>
        {task.taskName}
    </li>
}
export default completedCard