import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../features/todos/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className='list'>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'red' : 'black' }}
          >
            {todo.text}
          </span>
          <button className='remove-button' onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
