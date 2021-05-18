import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./index.module.scss";

const navigationItems = [
  {
    label: "ChargingFox App",
    path: "/",
  },
  {
    label: "Partner werden",
    path: "/partner",
  },
  {
    label: "Über uns",
    path: "/about-us",
  },
];

export const NavigationBar = () => {
  const { pathname } = useRouter();
  return (
    <div className={styles.menuContainer}>
      {navigationItems.map(({ label, path }) => (
        <Link key={path} href={path}>
          <a
            className={classnames(styles.menuItem, {
              [styles.selected]: pathname === path,
            })}
          >
            {label}
          </a>
        </Link>
      ))}
    </div>
  );
};
