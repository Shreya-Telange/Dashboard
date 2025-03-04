import Head from "next/head";
import Dashboard from "../components/Dashboard"; // Use relative path if not in src folder
import styles from "../styles/Home.module.css"; // Ensure correct path

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <Dashboard />
        </main>
      </div>
    </>
  );
}
