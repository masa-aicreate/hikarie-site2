import styles from './Header.module.css'
import Container from './Container'
import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL // GH Pages では "/hikarie-site2/" になる

export default function Header() {
  return (
    <header className={styles.wrap}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}><a className={styles.link} href={BASE}>HIKARIE</a></div>
          <nav className={styles.nav} aria-label="Primary">
            <a className={styles.link} href={`${BASE}#concept`}>Concept</a>
            <a className={styles.link} href={`${BASE}#rooms`}>Rooms</a>
            <a className={styles.link} href={`${BASE}#access`}>Access</a>
            <a className={styles.link} href={`${BASE}#booking`}>Booking</a>
            <Link className={styles.link} to="/company">Company</Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}