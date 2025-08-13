import Container from './Container'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.wrap}>
      <Container>
        <div className={styles.inner}>
          <div>© {new Date().getFullYear()} HIKARIE Inc.</div>
          <div className={styles.small}>富山市弥生町 / 2LDKメゾネット（最大6名） / 新築・高断熱・専用Pあり</div>
        </div>
      </Container>
    </footer>
  )
}