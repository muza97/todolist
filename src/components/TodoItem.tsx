import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    onToggle(id);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDelete(id);
  };

  return (
    <li
      className={completed ? 'todo-item completed' : 'todo-item'}
      onClick={handleClick}
    >
      <span>{text}</span>
      <button
        className='delete-button'
        onClick={handleDeleteClick}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;
