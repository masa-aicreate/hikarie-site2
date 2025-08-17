import Container from '../components/Container'
import styles from './Experiences.module.css'
import { useLang } from '../i18n/LanguageProvider'

export default function Experiences() {
  const { lang } = useLang();

  const content = {
    ja: {
      title: 'Experiences',
      subtitle: '滞在と一緒に楽しめるローカル体験をご紹介。写真や予約リンクは後ほど差し込み。',
      items: [
        { t: 'そば打ち', img: '/exp/soba.jpg' },
        { t: '温浴・サウナ', img: '/exp/spa.jpg' },
        { t: '地元グルメ', img: '/exp/food.jpg' },
      ],
      description: '体験の簡単な紹介テキスト。予約方法などはリンクで案内。'
    },
    en: {
      title: 'Experiences',
      subtitle: 'Local experiences you can enjoy during your stay. Photos and booking links will be added later.',
      items: [
        { t: 'Soba Making', img: '/exp/soba.jpg' },
        { t: 'Hot Springs & Sauna', img: '/exp/spa.jpg' },
        { t: 'Local Cuisine', img: '/exp/food.jpg' },
      ],
      description: 'Brief introduction text for the experience. Booking methods and other information will be provided via links.'
    }
  };

  const current = content[lang];

  return (
    <section className={`section ${styles.wrap}`} aria-label="Experiences">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>{current.title}</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8, maxWidth: '56ch' }}>
          {current.subtitle}
        </p>
        <div className={styles.grid} style={{ marginTop: 20 }}>
          {current.items.map((x) => (
            <div key={x.t} className={styles.card}>
              {x.img ? (
                <img src={x.img} alt={x.t} className={styles.media} style={{ objectFit: 'cover' }} />
              ) : (
                <div className={styles.media}>画像プレースホルダ</div>
              )}
              <div className={styles.body}>
                <div className={styles.title}>{x.t}</div>
                <div className={styles.text}>{current.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}