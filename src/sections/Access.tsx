import Container from '../components/Container'
import styles from './Access.module.css'

export default function Access() {
  return (
    <section id="access" className={`section ${styles.wrap}`} aria-label="Location & Access">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>Location & Access</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8, maxWidth: '56ch' }}>
          富山駅徒歩圏。車でもアクセスしやすい立地で、観光にもビジネスにも便利。
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
            <h3 style={{ fontWeight: 600 }}>アクセス</h3>
            <ul style={{ color: 'var(--color-muted)', marginTop: 12, lineHeight: 1.8 }}>
              <li>富山駅 〇〇口 〜 徒歩 ◯ 分</li>
              <li>富山空港 〜 車 ◯ 分</li>
              <li>駐車: 敷地内 専用P 1台</li>
            </ul>
            <div style={{ color: 'var(--color-muted)', fontSize: 14, marginTop: 16 }}>
              ※ 所要時間は目安です。交通状況により変動します。
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}