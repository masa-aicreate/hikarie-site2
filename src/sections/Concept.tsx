import Container from '../components/Container'
import styles from './Concept.module.css'

export default function Concept() {
  const items = [
    { t: '高断熱・高耐震', d: '季節を問わず快適に、安心して滞在いただける仕様。' },
    { t: '最大6名・2LDK', d: '家族やグループにちょうど良い間取りと広さ。' },
    { t: '専用駐車場・長期滞在向き', d: '敷地内Pと家電設備で連泊もストレスなく。' },
  ]

  return (
    <section id="concept" className={`section ${styles.wrap}`} aria-label="Concept">
      <Container>
        <h2 className={styles.h2}>Concept</h2>
        <p className={styles.sub}>ゆとりある余白と、上質な素材感。時間の主役はあなたとご家族・ご友人です。</p>
        <div className={styles.grid} style={{ marginTop: 20 }}>
          {items.map((x, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon} />
              <div style={{ fontWeight: 600 }}>{x.t}</div>
              <div style={{ color: 'var(--color-muted)', marginTop: 6 }}>{x.d}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}