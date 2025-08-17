import React from "react";

export default function App() {
  return (
    <div style={styles.pageWrap}>
      {/* Демонстраційний контент */}
      <main style={styles.stubContent}>
        <h1 style={styles.stubTitle}>Контент сторінки</h1>
        <p>Прокрути вниз, щоб побачити футер.</p>
      </main>

      {/* Фон футера */}
      <div style={styles.footerBar} />

      {/* Логотип */}
      <img src="/logo2.svg" alt="Logo" style={styles.logo} />

      {/* Адреса */}
      <div style={styles.address}>
        <p style={styles.addressTitle}>Address</p>
        <p>Svobody str. 35</p>
        <p>Kyiv</p>
        <p>Ukraine</p>
      </div>

      {/* Соцмережі */}
      <div style={styles.socialsWrap}>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="/instagram.svg" alt="Instagram" style={styles.socialIcon} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/facebook.svg" alt="Facebook" style={styles.socialIcon} />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <img src="/whatsapp.svg" alt="WhatsApp" style={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
}

const styles = {
  pageWrap: {
    position: "relative",
    minHeight: 2400,
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  stubContent: {
    padding: "40px 24px",
  },
  stubTitle: {
    margin: 0,
    fontSize: 28,
  },
  footerBar: {
    position: "absolute",
    left: 0,
    top: 2000,
    width: "100%",
    height: 220,
    backgroundColor: "#FFB36C",
  },
  logo: {
    position: "absolute",
    width: 90,
    height: 62,
    top: 2100,
    left: 150,
    objectFit: "contain",
  },
  address: {
    position: "absolute",
    top: 2080,
    left: 280,
    fontSize: 14,
    lineHeight: 1.35,
    color: "#000",
  },
  addressTitle: {
    margin: 0,
    fontWeight: 700,
  },
  socialsWrap: {
    position: "absolute",
    top: 2130,
    left: 538,
    display: "flex",
    gap: 15,
    alignItems: "center",
  },
  socialIcon: {
    width: 40.68,
    height: 40,
    display: "block",
    transition: "transform 120ms ease",
  },
};