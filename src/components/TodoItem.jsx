/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from '../redux/actions';

const TodoItem = ({todo, index}) => {
    const dispatch = useDispatch();
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex items-center">
            <span className="mr-4 text-gray-500">
                {index + 1}
            </span>
            <span className={`mr-4 ${todo.completed ? "line-through text-red-500" : " "}`}>{todo.text}</span>
        </div>
        <div className="space-x-3 ml-8">
            <button className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-2 rounded' onClick={() => dispatch(toggleTodo(index))}>{todo.completed ? <FaToggleOff/> : <FaToggleOn/>}</button>
            <button className='mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-2 rounded' onClick={() => dispatch(removeTodo(index))}><FaTrash/></button>

            {
                !todo.completed && (
                    <button className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-2 rounded' onClick={() => dispatch(markCompleted(index))}><FaCheck/></button>
                )
            }
            {
                todo.completed && (
                    <button className='mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-2 rounded' onClick={() => dispatch(markIncomplete(index))}><FaTimes/></button>
                )
            }
        </div>
    </li>
  )
}

export default TodoItem