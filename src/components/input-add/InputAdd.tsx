import React ,{ChangeEvent} from 'react';
import style from './inputAdd.module.scss';

type TasksProps = {
  text: string;
  id: number;
  isCompleted: boolean

}
interface InputAddProps {
  text: string
  setText: (text:string)=> void
  tasks:TasksProps[];
  setTasks: (arr:TasksProps[]) => void;
}

export const InputAdd:React.FC<InputAddProps> = ({ text, setText, tasks, setTasks }) => {
  const addTasks = () => {
    if(text.trim().length )
      setTasks([{ text, id: Date.now(), isCompleted: false }, ...tasks]);
      setText('');
  };
  const handleText = (e:ChangeEvent<HTMLInputElement>) => {
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
