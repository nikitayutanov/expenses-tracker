import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">Expenses Tracker</Link>
      </h1>
    </header>
  );
}

export { Header };
