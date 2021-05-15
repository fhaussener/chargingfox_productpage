import Head from "next/head";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NavigationBar } from "../components/NavigationBar";

function Home({ mailchimpLink }) {
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

      <footer>Some footer</footer>
    </div>
  );
}

Home.getInitialProps = () => {
  return { mailchimpLink: process.env.NEXT_MAILCHIMP_API_URL };
};

export default Home;
