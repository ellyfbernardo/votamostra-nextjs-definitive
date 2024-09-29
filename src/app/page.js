

import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <header className={styles.header_container}>
          <h1>Escolha sua Sessão</h1>
          <Link href="/mostra-panorama-22-11" className={styles.link}>
           <li className={styles.li}>22/11</li>
          </Link>
        </header>

        <main>


        </main>
    </>
  );
}
