import styles from "./icon.module.css";

export default function Icon() {
  return (
    <div className={styles.iconWrapper}>
      <div className={`${styles.bulbul} ${styles.icon}`}>
        <i></i>
      </div>
    </div>
  );
}
