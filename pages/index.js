import Head from "next/head";
import { NavigationBar } from "../components/NavigationBar";

function Home() {
  return (
    <div>
      <Head>
        <title>Charging Fox App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main>
        <h1>Home landingpage</h1>

        <p>Some stuff about something</p>
      </main>

      <footer>Some footer</footer>
    </div>
  );
}

export default Home;
