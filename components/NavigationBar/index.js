import Link from "next/link";
import { Router, useRouter } from "next/router";
import classnames from "classnames";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import styles from "./index.module.scss";
import { useState } from "react";

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
  const { pathname, push } = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  let isPageSmall = useMediaQuery("(max-width: 970px)");

  return (
    <div className={styles.menuContainer}>
      <Image
        src="/logo.png"
        alt="Logo"
        objectFit="contain"
        width={300}
        height={75}
      />
      {!isPageSmall ? (
        <div className={styles.navigation}>
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
      ) : (
        <>
          <MenuIcon
            className={styles.Menu}
            onClick={() => setShowMobileMenu(true)}
          />
          {showMobileMenu && (
            <div className={styles.menuOverlay}>
              <XIcon
                className={styles.Close}
                onClick={() => setShowMobileMenu(false)}
              />
              <div className={styles.menuVertical}>
                {navigationItems.map(({ label, path }) => (
                  <a
                    className={classnames(styles.menuItem, {})}
                    onClick={() => {
                      if (pathname === path) {
                        setShowMobileMenu(false);
                      } else {
                        push(path);
                      }
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className={styles.logoSmall}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  objectFit="contain"
                  width={200}
                  height={75}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
