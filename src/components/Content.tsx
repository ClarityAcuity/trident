import { useEffect } from "react";
import styles from "./content.module.css";
import image from "../images/bulbul.png";
import Section from "./Section";
import type { Data } from "../api";

interface Props {
  data: Data;
}

export default function Content({
  data: {
    intro: { title, descritpion },
    sections,
  },
}: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image.src} alt="bulbul" />
        <div className={styles.intro}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{descritpion}</p>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        {sections.map(({ title, descritpion }) => (
          <Section key={title} title={title} descritpion={descritpion} />
        ))}
      </div>
    </div>
  );
}
