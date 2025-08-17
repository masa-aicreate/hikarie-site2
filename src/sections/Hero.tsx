import Container from '../components/Container'
import styles from './Hero.module.css'
import { useLang } from '../i18n/LanguageProvider'

export default function Hero() {
  const { lang } = useLang();
  const BASE = import.meta.env.BASE_URL;
  const poster = `${BASE}hero/hero.jpg`;

  const title = lang === "en" ? "Family-friendly 2LDK Maisonette" : "家族にやさしい2LDKメゾネット";
  const sub   = lang === "en"
    ? "Comfortable, safe, and spacious stay within walking distance to Toyama Station."
    : "富山駅から徒歩圏内。快適・安心・広々とした滞在を。";
  const book  = lang === "en" ? "Book Now" : "予約する";
  const view  = lang === "en" ? "View Room" : "お部屋を見る";

  return (
    <section aria-label="Hero" className={styles.wrap}>
      <div className={styles.media}>
        <img className={styles.poster} src={poster} alt="Hero" loading="eager" />
      </div>
      <div className={styles.overlay} />
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.sub}>{sub}</p>
          <div className={styles.ctaRow}>
            <a className="btn" href="#booking">{book}</a>
            <a className="btn" href="#rooms">{view}</a>
          </div>
        </div>
      </Container>
    </section>
  )
}
