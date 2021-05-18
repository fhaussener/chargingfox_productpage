import Head from "next/head";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { SelectorIcon } from "@heroicons/react/solid";
import { FeatureCard } from "../components/FeatureCard";
import { NavigationBar } from "../components/NavigationBar";
import { useState } from "react";

const featuresLader = [
  {
    icon: <SelectorIcon />,
    title: "Freigabe von Ladestation",
    description:
      "Die private Station kann jederzeit für andere Personen freigegeben werden",
  },
  {
    icon: <SelectorIcon />,
    title: "Bestes Zeitfenster für Freigabe finden",
    description:
      "Man kann man die Zeiten mit dem besten Verdienst, durch unser Dynamic Pricing finden",
  },
  {
    icon: <SelectorIcon />,
    title: "Geld verdienen mit Freigabe",
    description:
      "Die Benutzung durch andere Personen wird entschädigt und kann ausgezahlt werden",
  },
];

const featuresVermieter = [
  {
    icon: <SelectorIcon />,
    title: "Freie Ladestation in der Nähe finden",
    description:
      "Auf der Karte kann man jederzeit sehen, welche Ladestationen zurzeit frei sind",
  },
  {
    icon: <SelectorIcon />,
    title: "Zusatzinfos zur Station finden",
    description:
      "Zur jeder Ladestation kann man Zusatzinfos zur Lage, Steckertyp und weiteres finden",
  },
  {
    icon: <SelectorIcon />,
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
        <h1>Home landingpage</h1>
        <h3>Subscribe for product updates</h3>
        <MailchimpSubscribe url={mailchimpLink} />
      </main>
      <button onClick={() => setIsLaderFeature(!isLaderFeature)}>
        Toggle features
      </button>
      <div>
        {getFeatureList(isLaderFeature).map(({ icon, title, description }) => (
          <FeatureCard icon={icon} title={title} description={description} />
        ))}
      </div>

      <footer>Some footer</footer>
    </div>
  );
}

Home.getInitialProps = () => {
  return { mailchimpLink: process.env.NEXT_MAILCHIMP_API_URL };
};

export default Home;
