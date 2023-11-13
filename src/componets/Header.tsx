import styles from "./Header.module.css";

import todoLogo from "../assets/rs-todo-logo.svg";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <img src={todoLogo} alt="Logotipo TodoList" />
    </header>
  );
}
