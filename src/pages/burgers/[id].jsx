import Image from "next/image";
import styles from "../../styles/burgers.module.css";

export const burgers = [
  {
    name: "Чизбургер",
    image: "/images/cheese.jpg",
    desc: "Классический бургер с бифштексом из 100% говядины с маринованными огурчиками и свежей пшеничной булочкой.",
    price: 110,
    id: "001",
  },
  {
    name: "Чикен Бургер",
    image: "/images/chicken.jpg",
    desc: "Куриный бургер с добавлением расплавленного сыра, соуса Барбекю и листового салата.",
    price: 150,
    id: "002",
  },
  {
    name: "Двойной Гамбургер",
    image: "/images/double.jpg",
    desc: "Двойной гамбургер с бифштексом из 100% говядины и расплавленным сыром Чеддер и пряным соусом.",
    price: 200,
    id: "003",
  },
];

export const getStaticPaths = () => {
  const paths = burgers.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const burger = burgers.find((burger) => burger.id === id);

  return {
    props: { burger },
  };
};

const Details = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <Image src={burger.image} alt={burger.name} width={350} height={320} />
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  );
};

export default Details;
