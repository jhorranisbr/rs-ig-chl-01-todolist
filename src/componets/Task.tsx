import styles from "./Task.module.css";

import { Trash, Check } from "@phosphor-icons/react";

interface TaskProps {
  checked: boolean;
}

export function Task({ checked = false }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.inputIconWrapper}>
        <div className={`${styles.input} ${checked && styles.inputDone}`}>
          {checked && <Check size={10} className={styles.inputIcon} />}
        </div>
      </div>

      <p className={checked ? styles.underline : ""}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className={styles.deleteIconWrapper}>
        <Trash size={14} className={styles.deleteIcon} />
      </button>
    </div>
  );
}
