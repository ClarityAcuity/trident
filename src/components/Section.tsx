import {} from "react";
import styles from "./section.module.css";

interface Props {
  title?: string;
  descritpion?: string;
}

export default function Section({ title, descritpion }: Props) {
  return (
    <ul key={title} className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.descritpion}>{descritpion}</p>
    </ul>
  );
}
