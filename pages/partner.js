import Head from "next/head";
import { NavigationBar } from "../components/NavigationBar";

export const Partner = () => (
  <div>
    <Head>
      <title>Partners and Sponsors</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavigationBar />
    <main>
      <h1>Partner and Sponsoring Page</h1>

      <p>Some stuff about something</p>
    </main>

    <footer>Some footer</footer>
  </div>
);

export default Partner;
