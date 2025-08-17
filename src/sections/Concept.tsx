import Container from '../components/Container'
import styles from './Concept.module.css'
import { useLang } from '../i18n/LanguageProvider'

export default function Concept() {
  const { lang } = useLang();
  
  const content = {
    ja: {
      title: 'Concept',
      subtitle: 'ゆとりある余白と、上質な素材感。時間の主役はあなたとご家族・ご友人です。',
      items: [
        { t: '高断熱・高耐震', d: '季節を問わず快適に、安心して滞在いただける仕様。' },
        { t: '最大6名・2LDK', d: '家族やグループにちょうど良い間取りと広さ。' },
        { t: '専用駐車場・長期滞在向き', d: '敷地内Pと家電設備で連泊もストレスなく。' },
      ]
    },
    en: {
      title: 'Concept',
      subtitle: 'Spacious comfort with premium materials. You and your family or friends are the main characters of your time.',
      items: [
        { t: 'High Insulation & Earthquake Resistance', d: 'Specifications for comfortable and safe stays regardless of the season.' },
        { t: 'Up to 6 People, 2LDK', d: 'Perfect layout and size for families and groups.' },
        { t: 'Private Parking & Long-term Stay', d: 'Stress-free extended stays with on-site parking and home appliances.' },
      ]
    }
  };

  const current = content[lang];

  return (
    <section id="concept" className={`section ${styles.wrap}`} aria-label="Concept">
      <Container>
        <h2 className={styles.h2}>{current.title}</h2>
        <p className={styles.sub}>{current.subtitle}</p>
        <div className={styles.grid} style={{ marginTop: 20 }}>
          {current.items.map((x, i) => (
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