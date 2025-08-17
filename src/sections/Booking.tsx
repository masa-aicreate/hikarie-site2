import Container from '../components/Container'
import styles from './Booking.module.css'
import { useLang } from '../i18n/LanguageProvider'

export default function Booking() {
  const { lang } = useLang();

  const content = {
    ja: {
      title: 'ご予約・お問い合わせ',
      subtitle: '各予約サイトまたは公式予約フォームへ遷移します。',
      airbnb: 'Airbnb',
      booking: 'Booking.com',
      official: '公式予約'
    },
    en: {
      title: 'Booking & Contact',
      subtitle: 'Redirects to each booking site or official booking form.',
      airbnb: 'Airbnb',
      booking: 'Booking.com',
      official: 'Official Booking'
    }
  };

  const current = content[lang];

  const Btn = ({ href, children }: { href: string; children: string }) => (
    <a className="btn" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )

  return (
    <section id="booking" className={`section ${styles.wrap}`} aria-label="Booking">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>{current.title}</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8 }}>{current.subtitle}</p>
        <div className={styles.row} style={{ marginTop: 20 }}>
          <Btn href="#">{current.airbnb}</Btn>
          <Btn href="#">{current.booking}</Btn>
          <Btn href="#">{current.official}</Btn>
        </div>
      </Container>
    </section>
  )
}