import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

export const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todo={item}
            onDeleteTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};
