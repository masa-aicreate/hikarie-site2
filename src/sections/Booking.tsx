import Container from '../components/Container'
import styles from './Booking.module.css'

export default function Booking() {
  const Btn = ({ href, children }: { href: string; children: string }) => (
    <a className="btn" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )

  return (
    <section id="booking" className={`section ${styles.wrap}`} aria-label="Booking">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>ご予約・お問い合わせ</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8 }}>各予約サイトまたは公式予約フォームへ遷移します。</p>
        <div className={styles.row} style={{ marginTop: 20 }}>
          <Btn href="#">Airbnb</Btn>
          <Btn href="#">Booking.com</Btn>
          <Btn href="#">公式予約</Btn>
        </div>
      </Container>
    </section>
  )
}