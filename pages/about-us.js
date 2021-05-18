import Head from "next/head";
import { NavigationBar } from "../components/NavigationBar";

import styles from "../styles/aboutUs.module.scss";

export const AboutUs = () => (
  <div>
    <Head>
      <title>About us</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavigationBar />
    <main>
      <h1 className={styles.header}>About us</h1>

      <p>Some stuff about something</p>
    </main>
    <footer>Some footer</footer>
  </div>
);

export default AboutUs;
