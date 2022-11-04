import React from 'react'
import { FC } from "react"
import s from "../../styles/RockPaperScissors.module.scss"
import RockPaperScissors from '../../components/RockPaperScissors/RockPaperScissors'

const RockPaperScissorsGame: FC = () => {
   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <RockPaperScissors />
         </div>
      </div>
   )
}


export default RockPaperScissorsGame