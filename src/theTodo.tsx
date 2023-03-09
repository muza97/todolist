import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TheTodoList: React.FC = () => {
  const [ThetodoList, setTodoList] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodoList([...ThetodoList, newTodoItem]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodoList = ThetodoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedTodoList);
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList(ThetodoList.filter((item) => item.id !== id));
  };

  return (
    <div className='huvud-lista'>
      <h2>ATT GÖRA LISTA</h2>
      <div className='första-container'>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Add a new todo...'
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className='uppdrag-lista'>
          {ThetodoList.map((item) => (
            <li
              key={item.id}
              className={item.completed ? 'todo-item completed' : 'todo-item'}
              onClick={() => handleToggleTodo(item.id)}
            >
              <span>{item.text}</span>
              <button
                className='delete-button'
                onClick={(event) => {
                  event.stopPropagation();
                  handleDeleteTodo(item.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TheTodoList;
