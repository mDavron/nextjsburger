import Link from "next/link";
import React from "react";
import styles from "../../styles/burgers.module.css";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { burgers: data },
  };
};
const Burgers = ({ burgers }) => {
  // console.log("props >>>", props);
  return (
    <div>
      <h1>Burgers</h1>
      {burgers.map((burger) => {
        return (
          <Link
            href={`/burgers/${burger.id}`}
            className={styles.burgerCard}
            key={burger.id}
          >
            <Image
              src={burger.image}
              alt={burger.name}
              width={100}
              height={100}
            />
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Burgers;
