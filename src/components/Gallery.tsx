import { useState, useCallback, useEffect } from 'react'
import styles from './Gallery.module.css'

export default function Gallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const openAt = (i: number) => { setIdx(i); setOpen(true) }
  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length])

  const onKey = useCallback((e: KeyboardEvent) => {
    if (!open) return
    if (e.key === 'Escape') setOpen(false)
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }, [open, prev, next])

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onKey])

  return (
    <>
      <div className={styles.strip} aria-label="内装ギャラリー（横スクロール）">
        {images.map((src, i) => (
          <div key={i} className={styles.thumbWrap}>
            <img className={styles.thumb} src={src} alt={`内装 ${i + 1}`} onClick={() => openAt(i)} loading="lazy" />
          </div>
        ))}
      </div>

      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <img className={styles.modalImg} src={images[idx]} alt={`プレビュー ${idx + 1}`} onClick={e => e.stopPropagation()} />
          <button className={`${styles.ctrlBtn} ${styles.close}`} onClick={() => setOpen(false)}>閉じる</button>
          <div className={styles.controls} aria-hidden>
            <button className={styles.ctrlBtn} onClick={(e) => { e.stopPropagation(); prev() }}>←</button>
            <button className={styles.ctrlBtn} onClick={(e) => { e.stopPropagation(); next() }}>→</button>
          </div>
        </div>
      )}
    </>
  )
}