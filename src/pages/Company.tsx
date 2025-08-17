import Container from '../components/Container'
import styles from './Company.module.css'
import { useLang } from '../i18n/LanguageProvider'

export default function Company() {
  const { lang } = useLang();

  const content = {
    ja: {
      title: '会社概要',
      subtitle: 'HIKARIE Inc. の基本情報です。',
      companyName: '会社名',
      companyValue: 'HIKARIE株式会社',
      address: '所在地',
      addressValue: '富山県富山市弥生町（仮）',
      ceo: '代表',
      ceoValue: '（仮）山田 太郎',
      business: '事業内容',
      businessValue: '宿泊事業 / 体験提供 / 不動産関連 ほか',
      contact: '連絡先',
      contactValue: 'info@example.com / 000-0000-0000'
    },
    en: {
      title: 'Company Profile',
      subtitle: 'Basic information about HIKARIE Inc.',
      companyName: 'Company Name',
      companyValue: 'HIKARIE Corporation',
      address: 'Address',
      addressValue: 'Yayoi-cho, Toyama-shi, Toyama Prefecture (Tentative)',
      ceo: 'CEO',
      ceoValue: '(Tentative) Taro Yamada',
      business: 'Business',
      businessValue: 'Accommodation / Experience Services / Real Estate Related, etc.',
      contact: 'Contact',
      contactValue: 'info@example.com / 000-0000-0000'
    }
  };

  const current = content[lang];

  return (
    <main className={`section ${styles.wrap}`}>
      <Container>
        <h1 className={styles.h1}>{current.title}</h1>
        <p className={styles.sub}>{current.subtitle}</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.label}>{current.companyName}</div>
            <div className={styles.value}>{current.companyValue}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>{current.address}</div>
            <div className={styles.value}>{current.addressValue}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>{current.ceo}</div>
            <div className={styles.value}>{current.ceoValue}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>{current.business}</div>
            <div className={styles.value}>{current.businessValue}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>{current.contact}</div>
            <div className={styles.value}>{current.contactValue}</div>
          </div>
        </div>
      </Container>
    </main>
  )
}