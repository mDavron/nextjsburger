import Link from "next/link";
import React from "react";
import { SiBurgerking } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div className="container flex">
        <div>
          <SiBurgerking />
        </div>
        <nav>
          <Link href="/">Домой</Link>
          <Link href="/about">О Нас</Link>
          <Link href="/reviews">Отзывы</Link>
          <Link href="/burgers/">Бургеры</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
