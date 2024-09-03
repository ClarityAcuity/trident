import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import hamburgur from "../images/hamburgur.svg";
import cross from "../images/cross.svg";
import { useResponsiveWidth } from "../hooks";
import type { Item } from "../api";

interface Props {
  items: Item;
}

export default function Navbar({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const width = useResponsiveWidth();

  useEffect(() => {
    if (width > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.head}>
        <div className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? cross.src : hamburgur.src}
            alt={isOpen ? "cross" : "hamburgur"}
            className={styles.image}
          />
        </div>
        <h1 className={styles.title}>白頭翁不吃小米</h1>
        <div className={styles.icon}></div>
      </div>
      {isOpen && (
        <div className={styles.tabs}>
          {items?.map((tab, index) => (
            <div className={styles.item} key={index} role="button">
              <a href="#">{tab}</a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
