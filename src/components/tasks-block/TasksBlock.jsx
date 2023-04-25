import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import style from './tasksBlock.module.scss';

export const TasksBlock = ({ tasks, setTasks }) => {
  const handleEdit = (e) => {
    console.log(e.target.value);
  };
  console.log(tasks);

  return (

    <>

      <AnimatePresence initial='true'>
        {tasks.map((task) => (
          <motion.section
            // whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            key={task.id}
            // timeout={500}
            className={style.container}
          >
            <div className={style.task}>
              <p className={style.text}>{task.text}</p>
              <FiEdit3
                cursor='pointer'
                size={23}
                onClick={handleEdit}
                className={style.editBtn}
              />
              <IoMdClose
                cursor='pointer'
                size={30}
                onClick={() => {
                  setTasks(tasks.filter((item) => task.id !== item.id));
                }}
                className={style.deleteBtn}
                stroke='white'
              />
            </div>
          </motion.section>
        ))}
      </AnimatePresence>
    </>
  );
};
