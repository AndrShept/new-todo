import React from 'react';
import style from './inputAdd.module.scss';
// import { TasksBlock } from '../tasks-block/TasksBlock';

export const InputAdd = ({ text, setText, tasks, setTasks }) => {
  const addTasks = () => {
    if(text.trim() && text.length )
      setTasks([{ text, id: Date.now(), isCompleted: false }, ...tasks]);
      setText('');
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <section className={style.container}>
      <div className={style.inputAdd}>
        <input
          onKeyDown={(e) => e.key === 'Enter' && addTasks()}
          placeholder='enter your task...'
          className={style.input}
          type='text'
          onChange={handleText}
          value={text}
        />
        <button onClick={addTasks} className={style.button}>
          ADD
        </button>
      </div>
    </section>
  );
};
