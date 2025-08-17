import styles from "./StickyBook.module.css";

export default function StickyBook() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div className={styles.fab}>
      <a
        href={`${BASE}#booking`}
        className={styles.btn}
        aria-label="Go to booking"
      >
        Book Now
      </a>
    </div>
  );
}
