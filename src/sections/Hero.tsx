import styles from './Hero.module.css'

export default function Hero() {
  const hasVideo = true // 動画がない場合は false にする or ファイル存在チェックを追加

  return (
    <section className={styles.wrap} aria-label="Hero">
      <div className={styles.media}>
        {hasVideo ? (
          <video
            className={styles.video}
            src="/hero.mp4"
            autoPlay
            muted
            playsInline
            loop
            poster="/hero.jpg"
          />
        ) : (
          <img className={styles.image} src="/hero.jpg" alt="HIKARIE hero" />
        )}

        <div className={styles.overlay}>
          <div className={styles.headline}>
            <h1 className={styles.h1}>富山駅徒歩圏、家族で寛げる<br/>2LDKメゾネットの民泊</h1>
            <p className={styles.sub}>高断熱・高耐震、専用駐車場、最大6名。長期滞在にも最適な快適・安心・高品質の空間。</p>
            <div className={styles.ctaRow}>
              <a className="btn" href="#booking">予約について</a>
              <a className="btn" href="#rooms">お部屋を見る</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}