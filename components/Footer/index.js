import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterSeperator}></div>
      <div className={styles.FooterContent}>
        <img
          src="/logo-mini.png"
          alt="Logo"
          objectFit="contain"
          width={100}
          height={100}
        />
        <div className={styles.SocialMedia}>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="/instagram.png" alt="Youtube" width={30} height={30} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="/facebook.png" alt="Youtube" width={30} height={30} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="/twitter.png" alt="Youtube" width={30} height={30} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="/youtube.png" alt="Youtube" width={30} height={30} />
          </a>
        </div>
        Copyright © ChargingFox
        <div className={styles.AppDownloads}>
          <a href="https://play.google.com/store/" target="_blank">
            <img
              alt="Jetzt bei Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png"
              objectFit="contain"
              width={150}
              height={70}
            />
          </a>
          <a href="https://apps.apple.com/" target="_blank">
            <img
              alt="Download on the App Store"
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/de-de?size=250x83&amp;releaseDate=1314230400&h=96c84c26b178d0e08179e275d0a23ee9"
              objectFit="contain"
              width={125}
              height={42}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
