import Head from "next/head";
import {NavigationBar} from "../components/NavigationBar";

import styles from "../styles/aboutUs.module.scss";
import Image from 'next/image'
import {FeatureCard} from "../components/FeatureCard";


export const AboutUs = () => (
    <div>
        <Head>
            <title>About us</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <NavigationBar/>
        <main className={styles.main}>
            <h2>Den Wechsel zu Elektro nahtlos machen.</h2>

            <p>Mit unserem Mission-Statement zeigen wir auf, dass wir helfen wollen, den Wechsel zum Elektroauto so
                einfach wie möglich zu gestalten. Wir wollen erreichen, dass man sich in Zukunft nicht mehr Fragen muss,
                ob es sich lohnt ein Elektroauto zu kaufen. Das Elektroauto soll durch die vielen Vorteile die einzig
                logische Wahl werden.</p>

            <h1>Team</h1>
            <FeatureCard
                icon={<Image src="/person1.png" width={100} height={100}/>}
                title={"Fabio Haussener"}
                description={"CEO"}
            />
            <FeatureCard
                icon={<Image src="/person2.png" width={100} height={100}/>}
                title={"Thomas Zürcher"}
                description={"CEO"}
            />
            <FeatureCard
                icon={<Image src="/person3.png" width={100} height={100}/>}
                title={"Max Mustermann"}
                description={"Entwickler"}
            />

            <h1>Vision</h1>
            <p className={styles.vision}>ChargingFox Vision ist es das Laden des Elektroautos einfacher und praktischer
                als das Tanken eines Benziners zu machen.</p>
            <p>Mit unserem Vision-Statement zeigen wir auf, wie wir die Zukunft mit Hilfe unserer Firma sehen. Damit wir
                unsere Mission umsetzten können, helfen wir mit, einen grossen Teil des Elektroauto-Besitzes zu
                vereinfachen. Wir wollen in den nächsten Jahren die User Experience so beeinflussen, dass es einfacher
                ist das Elektroauto zu laden als den Benziner zu Tanken.</p>

            <h1>Werte</h1>
            <div className={styles.values}>
                <div className={styles.value}>
                    <Image src="/simple.png" width={100} height={100}/>
                    <p className={styles.vision}>Vereinfache</p>
                </div>
                <div className={styles.value}>
                    <Image src="/user-focus.png" width={100} height={100}/>
                    <p className={styles.vision}>Fokussiere auf den Benutzer</p>
                </div>
                <div className={styles.value}>
                    <Image src="/experiment.png" width={100} height={100}/>
                    <p className={styles.vision}>Experimentiere</p>
                </div>
                <div className={styles.value} justify-content={"flex-start"}>
                    <Image src="/customer.png" width={100} height={100}/>
                    <p className={styles.vision}>Begeistere den Kunden</p>
                </div>
                <div className={styles.value} justify-content={"flex-end"}>
                    <Image src="/brave.png" width={100} height={100}/>
                    <p className={styles.vision}>Sei mutig</p>
                </div>
            </div>

        </main>
        <footer>Some footer</footer>
    </div>
);

export default AboutUs;
