import Container from '../components/Container'
import styles from './Rooms.module.css'
import Gallery from '../components/Gallery'
import { useLang } from '../i18n/LanguageProvider'
import { useState } from 'react'

export default function Rooms() {
  const { lang } = useLang();
  const BASE = import.meta.env.BASE_URL; // devでは'/'、Pagesでは'/hikarie-site2/'など
  const [mainOpen, setMainOpen] = useState(false);

  const imgs = [
    `${BASE}interior/01.jpg`,
    `${BASE}interior/02.jpg`,
    `${BASE}interior/03.jpg`,
    `${BASE}interior/04.jpg`,
  ]

  const content = {
    ja: {
      title: 'Room',
      subtitle: '2LDKメゾネット。リビング・ダイニングとベッドルームを上下に分け、生活動線とプライバシーを確保。',
      mainRoom: 'Main Room',
      description: 'ベッド構成や設備のハイライトを記載。最大6名まで。',
      bedding: '寝具例: ダブル×1 / シングル×2 / 布団×2',
      facilities: '設備例: キッチン・洗濯乾燥・Wi‑Fi・プロジェクター',
      parking: '駐車: 敷地内専用P'
    },
    en: {
      title: 'Room',
      subtitle: '2LDK Maisonette. Living/dining and bedrooms are separated vertically, ensuring smooth living flow and privacy.',
      mainRoom: 'Main Room',
      description: 'Bed configuration and facility highlights. Accommodates up to 6 people.',
      bedding: 'Bedding: Double×1 / Single×2 / Futon×2',
      facilities: 'Facilities: Kitchen, washer/dryer, Wi-Fi, projector',
      parking: 'Parking: On-site private parking'
    }
  };

  const current = content[lang];

  return (
    <section id="rooms" className={`section ${styles.wrap}`} aria-label="Rooms">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>{current.title}</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8, maxWidth: '56ch' }}>
          {current.subtitle}
        </p>

        <article className={styles.card} style={{ marginTop: 20 }}>
          <div className={styles.media} onClick={() => setMainOpen(true)}>
            <img className={styles.mediaImg} src={imgs[0]} alt="メインルームの内装" loading="lazy" />
          </div>
          <div className={styles.body}>
            <div className={styles.title}>{current.mainRoom}</div>
            <p className={styles.text}>{current.description}</p>
            <ul className={styles.list}>
              <li>{current.bedding}</li>
              <li>{current.facilities}</li>
              <li>{current.parking}</li>
            </ul>

            <div style={{ marginTop: 14 }}>
              <Gallery images={imgs} />
            </div>
          </div>
        </article>

        {mainOpen && (
          <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={() => setMainOpen(false)}>
            <img className={styles.lightboxImg} src={imgs[0]} alt="内装拡大プレビュー" onClick={e => e.stopPropagation()} />
          </div>
        )}
      </Container>
    </section>
  )
}