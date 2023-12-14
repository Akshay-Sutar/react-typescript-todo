import { useContext, useRef } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const TodoCtx = useContext(TodosContext);
  const todoIPRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoIPRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    TodoCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoIPRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
