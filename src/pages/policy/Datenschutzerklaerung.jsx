import React from 'react';
import styles from './datenschutz.module.css';

export default function Datenschutzerklaerung() {
  return (
    <div className={styles.datenschutzContainer}>
      <header className={styles.datenschutzHeader}>
        <h1>Datenschutzerklärung</h1>
      </header>

      {/* 1. Überblick */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>1. Datenschutz auf einen Blick</h2>
        <div className={styles.sectionContent}>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen Vorschriften. 
            Besonders bei der <strong>Vermietung von Apartments</strong> und dem <strong>Personentransport</strong> erfassen wir Daten, um unsere Dienstleistungen sicher und effizient zu erbringen.
          </p>
        </div>
      </section>

      {/* 2. Hosting */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>2. Hosting</h2>
        <div className={styles.sectionContent}>
          <h3>Externes Hosting (Hostinger)</h3>
          <p>
            Diese Website wird bei <strong>Hostinger.com</strong> gehostet. Die Daten (IP-Adressen, Buchungsanfragen, Kommunikationsdaten) werden auf deren Servern gespeichert, um eine schnelle Bereitstellung unseres Online-Angebots gemäß Art. 6 Abs. 1 lit. f DSGVO zu gewährleisten.
          </p>
        </div>
      </section>

      {/* 3. Spezifische Datenerfassung für unsere Dienste */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>3. Datenerfassung bei Buchungen (Wohnen & Transport)</h2>
        <div className={styles.sectionContent}>
          <p>
            Wenn Sie ein Apartment buchen oder einen Fahrservice anfragen, erfassen wir folgende Daten:
          </p>
          <ul>
            <li>Name und Kontaktdaten (E-Mail, Telefonnummer).</li>
            <li>Adressdaten (für Mietverträge).</li>
            <li>Reisedaten (Abholort, Zielort und Uhrzeit für den Transport).</li>
          </ul>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung).
          </p>
        </div>
      </section>

      {/* 4. WhatsApp Kommunikation */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>4. Kommunikation via WhatsApp</h2>
        <div className={styles.sectionContent}>
          <p>
            Für schnelle Buchungsbestätigungen nutzen wir WhatsApp (WhatsApp Ireland Limited). Bitte beachten Sie, dass hierbei Metadaten an Meta-Server (USA) übertragen werden können. Wir nutzen diesen Dienst auf Grundlage unseres berechtigten Interesses an einer effizienten Kundenkommunikation (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>
      </section>

      {/* 5. SSL-Verschlüsselung */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>5. Sicherheit</h2>
        <div className={styles.sectionContent}>
          <p>
            Diese Seite nutzt eine SSL- bzw. TLS-Verschlüsselung, um Ihre Anfragen vor dem Zugriff Dritter zu schützen.
          </p>
        </div>
      </section>

      {/* 6. Ihre Rechte */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>6. Ihre Rechte (Auskunft, Löschung)</h2>
        <div className={styles.sectionContent}>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
        </div>
      </section>
    </div>
  );
}