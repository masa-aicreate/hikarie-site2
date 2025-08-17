import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageProvider";

export default function Header() {
  const BASE = import.meta.env.BASE_URL;
  const link = (hash: string) => `${BASE}${hash}`;
  const { lang, toggleLang } = useLang();  // ← これが効いていないと変わりません

  // 簡易ラベル（必要なら辞書に差し替え可）
  const L = {
    concept: lang === "en" ? "Concept" : "コンセプト",
    rooms:   lang === "en" ? "Rooms"   : "お部屋",
    access:  lang === "en" ? "Access"  : "アクセス",
    booking: lang === "en" ? "Booking" : "予約",
    company: lang === "en" ? "Company" : "会社概要",
  };

  return (
    <header
      style={{
        position: 'relative',
        padding: '16px 0',
        background: '#222',
        color: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <a href={BASE} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 800 }}>
          HIKARIE
        </a>

        <nav style={{ display: 'flex', gap: 16 }}>
          <a href={link('#concept')} style={{ textDecoration: 'none', color: 'inherit' }}>{L.concept}</a>
          <a href={link('#rooms')}   style={{ textDecoration: 'none', color: 'inherit' }}>{L.rooms}</a>
          <a href={link('#access')}  style={{ textDecoration: 'none', color: 'inherit' }}>{L.access}</a>
          <a href={link('#booking')} style={{ textDecoration: 'none', color: 'inherit' }}>{L.booking}</a>
          <Link to="/company" style={{ textDecoration: 'none', color: 'inherit' }}>{L.company}</Link>
        </nav>

        {/* ← nav の直後・同じ行に置く */}
        <button
          type="button"
          onClick={toggleLang}
          aria-label="Toggle language"
          style={{
            marginLeft: 12,
            background: 'transparent',
            color: 'inherit',
            border: '1px solid #ffffff40',
            borderRadius: 12,
            padding: '6px 10px',
            cursor: 'pointer',
          }}
        >
          {lang === "en" ? "EN" : "JA"}
        </button>
      </div>
    </header>
  );
}
