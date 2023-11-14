import styles from "./Task.module.css";

import { Trash, Check } from "@phosphor-icons/react";

export interface TaskItem {
  checked: boolean;
  text: string;
}

interface TaskProps {
  task: TaskItem;
  onCompleteTask: (task: TaskItem) => void;
  onDeleteTask: (task: TaskItem) => void;
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  function handleCompleteTask() {
    onCompleteTask(task);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.inputIconWrapper}>
        <div
          className={`${styles.input} ${task.checked && styles.inputDone}`}
          onClick={handleCompleteTask}
        >
          {task.checked && <Check size={10} className={styles.inputIcon} />}
        </div>
      </div>

      <p className={task.checked ? styles.underline : ""}>{task.text}</p>

      <button className={styles.deleteIconWrapper} onClick={handleDeleteTask}>
        <Trash size={14} className={styles.deleteIcon} />
      </button>
    </div>
  );
}
