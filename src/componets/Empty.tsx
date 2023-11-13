import styles from "./Empty.module.css";

import clipboardIcon from "../assets/clipboard-icon.png";

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboardIcon} alt="Empty list icon" />

      <p>
        <strong>Você ainda não tem tarefas cadastradas.</strong>
        <br />
        Crie tarefas e organize seus itens a fazer.
      </p>
    </div>
  );
}
