import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
   <main className={styles.main}><div>
    <Header />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias hic nulla debitis distinctio eaque illum natus, officia perferendis maxime. Perferendis accusantium tempora sed in temporibus.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. In enim magni voluptatibus repellat assumenda, dignissimos quidem optio odio maxime, rem officiis ex! Quod, doloribus perspiciatis!
    </p>
    </div></main>
  );
}
