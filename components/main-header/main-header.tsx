import styles from "./main-header.module.css";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/career">Career</NavLink>
          </li>
          <li>
            <NavLink href="/side-project">Side Project</NavLink>
          </li>
          <li>
            <NavLink href="/stack">Stack</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
