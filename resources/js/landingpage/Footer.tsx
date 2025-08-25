import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.mainFooter} aria-label="Footer">
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
}
