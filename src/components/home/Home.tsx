import React from 'react';
import { InputAdd } from '../input-add/InputAdd';
import { TasksBlock } from '../tasks-block/TasksBlock';

export const Home = () => {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')as string) ||[]) 

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    <>
      <InputAdd
        text={text}
        setText={setText}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TasksBlock
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
};
