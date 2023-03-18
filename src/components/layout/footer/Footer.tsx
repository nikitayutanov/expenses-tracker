import styles from './Footer.module.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <small>&copy; {currentYear} Nikita Yutanov</small>
    </footer>
  );
}

export { Footer };
