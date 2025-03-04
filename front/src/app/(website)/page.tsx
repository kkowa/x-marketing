"use client";

import Shutter from "@/components/animations/Shutter/Shutter";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Shutter />
      <section className={styles.landing__container}>
        <div
          className={styles.landing__header}
          style={{
            zIndex: 1,
          }}
        >
          <div>
            <h1 className={styles.heading}>Landing Heading</h1>
            <p className={styles.description}>Landing Description</p>
          </div>
        </div>
      </section>
      <section className={styles.about__container}>
        <div
          style={{
            zIndex: 1,
          }}
        >
          <p className={styles.heading}>About Heading</p>
          <p className={styles.description}>About Description</p>
        </div>
      </section>
    </>
  );
}
