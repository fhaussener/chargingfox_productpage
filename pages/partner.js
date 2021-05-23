import Head from "next/head";
import Image from "next/image";
import {
  MapIcon,
  CreditCardIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { FeatureCard } from "../components/FeatureCard";
import { NavigationBar } from "../components/NavigationBar";

import styles from "../styles/partner.module.scss";

const partnerFeatures = [
  {
    icon: <MapIcon />,
    title: "Freigabe von Ladestation",
    description:
      "Die private Station kann jederzeit für andere Personen freigegeben werden",
  },
  {
    icon: <CreditCardIcon />,
    title: "Bestes Zeitfenster für Freigabe finden",
    description:
      "Man kann man die Zeiten mit dem besten Verdienst, durch unser Dynamic Pricing finden",
  },
  {
    icon: <ClipboardListIcon />,
    title: "Geld verdienen mit Freigabe",
    description:
      "Die Benutzung durch andere Personen wird entschädigt und kann ausgezahlt werden",
  },
];

export const Partner = () => (
  <div>
    <Head>
      <title>Partners and Sponsors</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavigationBar />
    <main>
      <div className={styles.Header}>
        <div>
          <h3>
            Mit dem ChargingFox Partner Programm können sie auf unserer App
            gesponserte Ladestationen bewerben
          </h3>
        </div>
        <Image
          src="/headerImgPartner.png"
          objectFit="contain"
          width={700}
          height={400}
        />
      </div>
      <div className={styles.Partner}>
        <h2>Unsere Partner</h2>
        <div>
          <div>logo1</div>
          <div>logo1</div>
          <div>logo1</div>
          <div>logo1</div>
          <div>logo1</div>
        </div>
      </div>
      <div className={styles.PartnerFeatures}>
        <h2> Wieso ChargingFox?</h2>
        <div className={styles.featureList}>
          {partnerFeatures.map(({ icon, title, description }, index) => (
            <FeatureCard
              key={`card-${index}`}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </main>

    <footer>Some footer</footer>
  </div>
);

export default Partner;
