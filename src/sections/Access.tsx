import Container from '../components/Container'
import styles from './Access.module.css'
import { useLang } from '../i18n/LanguageProvider'

export default function Access() {
  const { lang } = useLang();

  const content = {
    ja: {
      title: 'Location & Access',
      subtitle: '富山駅徒歩圏。車でもアクセスしやすい立地で、観光にもビジネスにも便利。',
      accessTitle: 'アクセス',
      station: '富山駅 〇〇口 〜 徒歩 ◯ 分',
      airport: '富山空港 〜 車 ◯ 分',
      parking: '駐車: 敷地内 専用P 1台',
      note: '※ 所要時間は目安です。交通状況により変動します。'
    },
    en: {
      title: 'Location & Access',
      subtitle: 'Within walking distance of Toyama Station. Easy access by car, convenient for both tourism and business.',
      accessTitle: 'Access',
      station: 'Toyama Station Exit 〇〇 〜 Walking ◯ min',
      airport: 'Toyama Airport 〜 Car ◯ min',
      parking: 'Parking: On-site private parking 1 car',
      note: '* Travel times are approximate and may vary depending on traffic conditions.'
    }
  };

  const current = content[lang];

  return (
    <section id="access" className={`section ${styles.wrap}`} aria-label="Location & Access">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>{current.title}</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8, maxWidth: '56ch' }}>
          {current.subtitle}
        </p>
        <div className={styles.grid} style={{ marginTop: 20 }}>
          <div className={styles.map}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=%E5%AF%8C%E5%B1%B1%E9%A7%85&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ color: 'var(--color-fg)' }}>
            <h3 style={{ fontWeight: 600 }}>{current.accessTitle}</h3>
            <ul style={{ color: 'var(--color-muted)', marginTop: 12, lineHeight: 1.8 }}>
              <li>{current.station}</li>
              <li>{current.airport}</li>
              <li>{current.parking}</li>
            </ul>
            <div style={{ color: 'var(--color-muted)', fontSize: 14, marginTop: 16 }}>
              {current.note}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}