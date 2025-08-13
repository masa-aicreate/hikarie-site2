import Container from '../components/Container'
import styles from './Company.module.css'

export default function Company() {
  return (
    <main className={`section ${styles.wrap}`}>
      <Container>
        <h1 className={styles.h1}>会社概要</h1>
        <p className={styles.sub}>HIKARIE Inc. の基本情報です。</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.label}>会社名</div>
            <div className={styles.value}>HIKARIE株式会社</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>所在地</div>
            <div className={styles.value}>富山県富山市弥生町（仮）</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>代表</div>
            <div className={styles.value}>（仮）山田 太郎</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>事業内容</div>
            <div className={styles.value}>宿泊事業 / 体験提供 / 不動産関連 ほか</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>連絡先</div>
            <div className={styles.value}>info@example.com / 000-0000-0000</div>
          </div>
        </div>
      </Container>
    </main>
  )
}