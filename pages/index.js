import Head from "next/head";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  SelectorIcon,
  MapIcon,
  ClipboardListIcon,
  LightningBoltIcon,
  ChartSquareBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { FeatureCard } from "../components/FeatureCard";
import { NavigationBar } from "../components/NavigationBar";
import { FeatureToggle } from "../components/FeatureToggle";
import { MapLocations } from "../components/Map";

import styles from "../styles/home.module.scss";

const featuresVermieter = [
  {
    icon: <SelectorIcon />,
    title: "Freigabe von Ladestation",
    description:
      "Die private Station kann jederzeit für andere Personen freigegeben werden",
  },
  {
    icon: <MapIcon />,
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

const featuresLader = [
  {
    icon: <LightningBoltIcon />,
    title: "Freie Ladestation in der Nähe finden",
    description:
      "Auf der Karte kann man jederzeit sehen, welche Ladestationen zurzeit frei sind",
  },
  {
    icon: <ChartSquareBarIcon />,
    title: "Zusatzinfos zur Station finden",
    description:
      "Zur jeder Ladestation kann man Zusatzinfos zur Lage, Steckertyp und weiteres finden",
  },
  {
    icon: <CurrencyDollarIcon />,
    title: "Einfache Bezahlung via App",
    description:
      "Zahlungen werden akzeptiert via Kreditkarte, Apple Pay, Google Pay und Twint",
  },
];

const getFeatureList = (isLaderFeature) => {
  if (isLaderFeature) return featuresLader;
  return featuresVermieter;
};

function Home({ mailchimpLink }) {
  const [isLaderFeature, setIsLaderFeature] = useState(true);

  return (
    <div>
      <Head>
        <title>Charging Fox App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main>
        <div className={styles.Header}>
          <h2>Finde eine freie Ladestation in Sekunden</h2>
          <h3>Werde informiert wenn die App ready ist</h3>
          <MailchimpSubscribe url={mailchimpLink} />
        </div>

        <div className={styles.Features}>
          <h2>Features für...</h2>
          <FeatureToggle
            isLader={isLaderFeature}
            onClick={(isLader) => setIsLaderFeature(isLader)}
          />
          <div className={styles.featureList}>
            {getFeatureList(isLaderFeature).map(
              ({ icon, title, description }, index) => (
                <FeatureCard
                  key={`card-${index}`}
                  icon={icon}
                  title={title}
                  description={description}
                />
              )
            )}
          </div>
        </div>
        <div className={styles.Map}>
          <h2>Unsere Ladestationen</h2>
          <MapLocations />
        </div>
      </main>
      <footer>Some footer</footer>
    </div>
  );
}

Home.getInitialProps = () => {
  return { mailchimpLink: process.env.NEXT_MAILCHIMP_API_URL };
};

export default Home;
