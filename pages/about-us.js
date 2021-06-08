import Head from "next/head";
import { NavigationBar } from "../components/NavigationBar";

import styles from "../styles/aboutUs.module.scss";
import { Footer } from "../components/Footer";

export const AboutUs = () => (
  <div>
    <Head>
      <title>About us</title>
      <link rel="icon" href="/logo-mini.png" />
    </Head>
    <NavigationBar />
    <main className={styles.main}>
      <h2>Den Wechsel zu Elektro nahtlos machen.</h2>

      <p>
        Mit unserem Mission-Statement zeigen wir auf, dass wir helfen wollen,
        den Wechsel zum Elektroauto so einfach wie möglich zu gestalten. Wir
        wollen erreichen, dass man sich in Zukunft nicht mehr Fragen muss, ob es
        sich lohnt ein Elektroauto zu kaufen. Das Elektroauto soll durch die
        vielen Vorteile die einzig logische Wahl werden.
      </p>

      <h1>Team</h1>
      <div className={styles.Team}>
        <div className={styles.teamMember}>
          <div className={styles.CardContainer}>
            <div className={styles.memberImg}>
              {<img src="/person1.png" width={200} height={200} />}
            </div>
            <h2 className={styles.memberName}>{"Fabio Haussener"}</h2>
            <p className={styles.memberRole}>{"CEO"}</p>
          </div>
          <div className={styles.CardContainer}>
            <div className={styles.memberImg}>
              {<img src="/person2.png" width={200} height={200} />}
            </div>
            <h2 className={styles.memberName}>{"Thomas Zürcher"}</h2>
            <p className={styles.memberRole}>{"CEO"}</p>
          </div>
          <div className={styles.CardContainer}>
            <div className={styles.memberImg}>
              {<img src="/person3.png" width={200} height={200} />}
            </div>
            <h2 className={styles.memberName}>{"Max Mustermann"}</h2>
            <p className={styles.memberRole}>{"Entwickler"}</p>
          </div>
        </div>
      </div>

      <h1>Vision</h1>
      <p className={styles.vision}>
        ChargingFox Vision ist es das Laden des Elektroautos einfacher und
        praktischer als das Tanken eines Benziners zu machen.
      </p>
      <p>
        Mit unserem Vision-Statement zeigen wir auf, wie wir die Zukunft mit
        Hilfe unserer Firma sehen. Damit wir unsere Mission umsetzten können,
        helfen wir mit, einen grossen Teil des Elektroauto-Besitzes zu
        vereinfachen. Wir wollen in den nächsten Jahren die User Experience so
        beeinflussen, dass es einfacher ist das Elektroauto zu laden als den
        Benziner zu Tanken.
      </p>

      <h1>Werte</h1>
      <div className={styles.Values}>
        <div className={styles.valueContent}>
          <div className={styles.value}>
            <img src="/simple.png" width={100} height={100} />
            <p>Vereinfache</p>
          </div>
          <div className={styles.value}>
            <div className={styles.value}></div>
            <img src="/user-focus.png" width={100} height={100} />
            <p>Fokussiere auf den Benutzer</p>
          </div>
          <div className={styles.value}>
            <img src="/experiment.png" width={100} height={100} />
            <p>Experimentiere</p>
          </div>
          <div className={styles.value}>
            <div className={styles.value}></div>
            <img src="/customer.png" width={100} height={100} />
            <p>Begeistere den Kunden</p>
          </div>
          <div className={styles.value}>
            <img src="/brave.png" width={100} height={100} />
            <p>Sei mutig</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
