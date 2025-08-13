import styles from './StickyBook.module.css'
const BASE = import.meta.env.BASE_URL

export default function StickyBook() {
  return (
    <a className={styles.btn} href={`${BASE}#booking`} aria-label="予約へ移動">
      予約へ <span className={styles.badge}>Book</span>
    </a>
  )
}