import "./global.css";

import styles from "./App.module.css";

import { Header } from "./componets/Header";
import { Button } from "./componets/Button";
import { Input } from "./componets/Input";

import { PlusCircle } from "@phosphor-icons/react";

import { Empty } from "./componets/Empty";
import { Task } from "./componets/Task";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <form>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button type="submit">
            Criar <PlusCircle size={16} />
          </Button>
        </form>

        <section className={styles.tasks}>
          <header className={styles.tasksHeader}>
            <div className={`${styles.tasksCreated} ${styles.tasksInfo}`}>
              Tarefas Criadas
              <span className={styles.tasksCounter}>0</span>
            </div>

            <div className={`${styles.tasksDone} ${styles.tasksInfo}`}>
              Concluídas
              <span className={styles.tasksCounter}>0</span>
            </div>
          </header>

          <Empty />
          <Task checked />
          <Task checked={false} />
        </section>
      </main>
    </div>
  );
}

export default App;
