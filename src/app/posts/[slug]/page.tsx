import styles from "./page.module.css";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  return (
    <main className={styles.main}>
      <h1>Posts | Eleven Labo</h1>
    </main>
  );
}
