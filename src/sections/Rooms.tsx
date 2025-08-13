import Container from '../components/Container'
import styles from './Rooms.module.css'
import Gallery from '../components/Gallery'

export default function Rooms() {
  const BASE = import.meta.env.BASE_URL;/hikarie-site2/ // devでは'/'、Pagesでは'/hikarie-site2/'など

  const imgs = [
    `${BASE}interior/01.jpg`,
    `${BASE}interior/02.jpg`,
    `${BASE}interior/03.jpg`,
    `${BASE}interior/04.jpg`,
    `${BASE}interior/05.jpg`,
  ]

  return (
    <section id="rooms" className={`section ${styles.wrap}`} aria-label="Rooms">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>Room</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8, maxWidth: '56ch' }}>
          2LDKメゾネット。リビング・ダイニングとベッドルームを上下に分け、生活動線とプライバシーを確保。
        </p>

        <article className={styles.card} style={{ marginTop: 20 }}>
          <div className={styles.media}>画像プレースホルダ</div>
          <div className={styles.body}>
            <div className={styles.title}>Main Room</div>
            <p className={styles.text}>ベッド構成や設備のハイライトを記載。最大6名まで。</p>
            <ul className={styles.list}>
              <li>寝具例: ダブル×1 / シングル×2 / 布団×2</li>
              <li>設備例: キッチン・洗濯乾燥・Wi‑Fi・プロジェクター</li>
              <li>駐車: 敷地内専用P</li>
            </ul>

            <div style={{ marginTop: 14 }}>
              <Gallery images={imgs} />
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}