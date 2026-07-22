import React from 'react';
import styles from './Impressum.module.css';

const Impressum = () => {
  return (
    <div className={styles.impressumPageContainer}>
      <header className={styles.impressumHeader}>
        <h1>Impressum</h1>
        <p className={styles.subtitle}>Informationspflicht gemäß § 5 E-Commerce Gesetz (ECG) und Offenlegungspflicht gemäß § 25 Mediengesetz</p>
      </header>

      <div className={styles.impressumGrid}>
        {/* Unternehmensangaben */}
        <div className={styles.impressumCard}>
          <h3>Medieninhaberin & Herausgeberin</h3>
          <p><strong>Ruth Alonso Fox</strong></p>
          <p>KINDER IM WANDEL</p>
          <p>Dipl. Elementarpädagogin & Entwicklungsbegleiterin</p>
          <p>Wien, Österreich</p>
        </div>

        {/* Kontakt */}
        <div className={styles.impressumCard}>
          <h3>Kontakt</h3>
          <p><strong>Telefon:</strong> +43 660 123 45 67</p>
          <p><strong>E-Mail:</strong> <a href="mailto:ruth.alonsofox@gmail.com">ruth.alonsofox@gmail.com</a></p>
          <p><strong>Web:</strong> <a href="https://www.ruthalonsofox.at" target="_blank" rel="noopener noreferrer">www.ruthalonsofox.at</a></p>
        </div>

        {/* Berufsbezeichnung & Tätigkeit */}
        <div className={styles.impressumCard}>
          <h3>Tätigkeitsfeld & Qualifikation</h3>
          <p><strong>Berufsbezeichnung:</strong> Diplomierte Elementarpädagogin</p>
          <p><strong>Zusatzqualifikation:</strong> Lebens- und Sozialberaterin (LSB) in Ausbildung unter Supervision</p>
          <p><strong>Unternehmensgegenstand:</strong> Pädagogische Entwicklungsbegleitung & Familienberatung</p>
        </div>

        {/* Aufsichtsbehörde / Rechtsvorschriften */}
        <div className={styles.impressumCard}>
          <h3>Aufsichtsbehörde & Recht</h3>
          <p><strong>Anwendbare Rechtsvorschriften:</strong> Gewerbeordnung (GewO) – abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a></p>
          <p><strong>Standort:</strong> Wien, Österreich</p>
        </div>

        {/* EU-Streitschlichtung */}
        <div className={`${styles.impressumCard} ${styles.fullWidth}`}>
          <h3>EU-Streitschlichtung</h3>
          <p>
            Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>.
          </p>
          <p>
            Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.
          </p>
        </div>

        {/* Verbraucherstreitbeilegung */}
        <div className={`${styles.impressumCard} ${styles.fullWidth}`}>
          <h3>Verbraucherstreitbeilegung</h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;