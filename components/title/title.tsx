import styles from "./title.module.css";

export default function Title() {
  return (
    <h1 className={styles.title}>
      <span className={styles.top}>Hi, I&apos;m</span>
      Louis <br />
      Marais
      <span className={styles.caligraphy}>Front End Developer</span>
    </h1>
  );
}
