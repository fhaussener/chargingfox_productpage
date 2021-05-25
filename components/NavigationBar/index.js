import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./index.module.scss";
import Image from 'next/image'

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
    const {pathname} = useRouter();
    return (
        <div className={styles.menuContainer}>
            <Image src="/logo.png" alt="Logo" objectFit="contain" width={300} height={75}/>
            <div className={styles.navigation}>
            {navigationItems.map(({label, path}) => (
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
        </div>
    );
};
