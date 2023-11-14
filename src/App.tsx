import { ChangeEvent, FormEvent, useState } from "react";

import "./global.css";

import styles from "./App.module.css";

import { Header } from "./componets/Header";
import { Button } from "./componets/Button";
import { Input } from "./componets/Input";

import { PlusCircle } from "@phosphor-icons/react";

import { Empty } from "./componets/Empty";
import { Task, TaskItem } from "./componets/Task";

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks((state) => [
      ...state,
      {
        checked: false,
        text: newTaskText,
      },
    ]);
  }

  function completeTask(currentTask: TaskItem) {
    const tasksToggled = tasks.map((task) => {
      if (task.text === currentTask.text) {
        task.checked = !task.checked;
      }

      return task;
    });

    setTasks(tasksToggled);
  }

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <form onSubmit={handleCreateNewTask}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            // onInvalid={handleNewTaskInvalid}
            required
          />
          <Button type="submit">
            Criar <PlusCircle size={16} />
          </Button>
        </form>

        <section className={styles.tasks}>
          <header className={styles.tasksHeader}>
            <div className={`${styles.tasksCreated} ${styles.tasksInfo}`}>
              Tarefas Criadas
              <span className={styles.tasksCounter}>{tasks.length}</span>
            </div>

            <div className={`${styles.tasksDone} ${styles.tasksInfo}`}>
              Concluídas
              <span className={styles.tasksCounter}>
                {tasks.filter((task) => !!task.checked).length} de{" "}
                {tasks.length}
              </span>
            </div>
          </header>

          {tasks.length === 0 && <Empty />}
          {tasks.length > 0 &&
            tasks.map((task) => (
              <Task task={task} onCompleteTask={completeTask} />
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;
