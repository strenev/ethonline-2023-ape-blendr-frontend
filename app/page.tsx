'use client'
import Intro from "@/components/intro";
import styles from "./page.module.scss";
import "./globals.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro></Intro>
    </main>
  );
}
