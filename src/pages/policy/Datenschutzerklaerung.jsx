import React from 'react';
import styles from './datenschutz.module.css';

export default function Datenschutzerklaerung() {
  return (
    <div className={styles.datenschutzContainer}>
      <header className={styles.datenschutzHeader}>
        <h1>Datenschutzerklärung</h1>
        <p className={styles.subtitle}>
          Informationen über die Erhebung und Verarbeitung Ihrer personenbezogenen Daten bei Kinder im Wandel
        </p>
      </header>

      {/* 1. Überblick */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>1. Datenschutz auf einen Blick</h2>
        <div className={styles.sectionContent}>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen oder unsere pädagogische Beratung und Entwicklungsbegleitung in Anspruch nehmen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </div>
      </section>

      {/* 2. Verantwortliche Stelle */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>2. Verantwortliche Stelle</h2>
        <div className={styles.sectionContent}>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className={styles.contactCard}>
            <strong>Ruth Alonso Fox</strong><br />
            Dipl. Elementarpädagogin & Entwicklungsbegleiterin<br />
            <em>KINDER IM WANDEL</em><br />
            Wien, Österreich<br />
            E-Mail: <a href="mailto:ruth.alonsofox@gmail.com">ruth.alonsofox@gmail.com</a><br />
            Telefon: +43 660 123 45 67
          </div>
        </div>
      </section>

      {/* 3. Datenerfassung auf unserer Website */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>3. Datenerfassung & Beratungstermine</h2>
        <div className={styles.sectionContent}>
          <h3>Anfragen und Terminbuchungen</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder über ein Buchungsformular kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert:
          </p>
          <ul>
            <li>Vor- und Nachname der Erziehungsberechtigten</li>
            <li>Kontaktdaten (E-Mail-Adresse, Telefonnummer)</li>
            <li>Informationen zum Kind (Name, Alter) im Rahmen der pädagogischen Begleitung</li>
            <li>Relevante Anliegen zur gezielten Vorbereitung der Beratungssitzungen</li>
          </ul>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung oder vorvertragliche Maßnahmen) sowie unserem berechtigten Interesse an einer vertrauensvollen und individuellen Betreuung.
          </p>
        </div>
      </section>

      {/* 4. Hosting */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>4. Hosting & Bereitstellung der Website</h2>
        <div className={styles.sectionContent}>
          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Webhosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>
          <p>
            Das Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>
      </section>

      {/* 5. Datensicherheit */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>5. SSL- bzw. TLS-Verschlüsselung</h2>
        <div className={styles.sectionContent}>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </div>
      </section>

      {/* 6. Rechte der betroffenen Personen */}
      <section className={styles.datenschutzSection}>
        <h2 className={styles.sectionTitle}>6. Ihre Rechte</h2>
        <div className={styles.sectionContent}>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
          <ul>
            <li><strong>Auskunft:</strong> Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten.</li>
            <li><strong>Berichtigung:</strong> Recht auf Korrektur unrichtiger Daten.</li>
            <li><strong>Löschung:</strong> Recht auf Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
            <li><strong>Einschränkung der Verarbeitung:</strong> Recht, die Verarbeitung Ihrer Daten einzuschränken.</li>
            <li><strong>Widerruf:</strong> Sie können eine bereits erteilte Einwilligung zur Datenverarbeitung jederzeit widerrufen.</li>
          </ul>
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>
        </div>
      </section>
    </div>
  );
}