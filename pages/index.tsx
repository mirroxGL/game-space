import s from "../styles/Home.module.scss"
import { FaRegHandScissors } from "react-icons/fa"
import { GiRopeCoil } from "react-icons/gi"
import Link from "next/link"
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.navbar}>
          <Link className={s.gameIcon} href="/rock-paper-scissors"><FaRegHandScissors /></Link>
          <Link className={s.gameIcon} href="/hangman"><GiRopeCoil /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
