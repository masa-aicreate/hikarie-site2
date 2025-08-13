import Container from '../components/Container'
import styles from './Experiences.module.css'

export default function Experiences() {
  const items = [
    { t: 'そば打ち', img: '/exp/soba.jpg' },
    { t: '温浴・サウナ', img: '/exp/spa.jpg' },
    { t: '地元グルメ', img: '/exp/food.jpg' },
  ]

  return (
    <section className={`section ${styles.wrap}`} aria-label="Experiences">
      <Container>
        <h2 style={{ fontSize: 'var(--fs-h2)' }}>Experiences</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: 8, maxWidth: '56ch' }}>
          滞在と一緒に楽しめるローカル体験をご紹介。写真や予約リンクは後ほど差し込み。
        </p>
        <div className={styles.grid} style={{ marginTop: 20 }}>
          {items.map((x) => (
            <div key={x.t} className={styles.card}>
              {x.img ? (
                <img src={x.img} alt={x.t} className={styles.media} style={{ objectFit: 'cover' }} />
              ) : (
                <div className={styles.media}>画像プレースホルダ</div>
              )}
              <div className={styles.body}>
                <div className={styles.title}>{x.t}</div>
                <div className={styles.text}>体験の簡単な紹介テキスト。予約方法などはリンクで案内。</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}