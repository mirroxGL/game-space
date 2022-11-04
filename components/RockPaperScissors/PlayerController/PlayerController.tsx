import React, { FC } from 'react'
import { GiRock, GiPaper, GiScissors } from "react-icons/gi"
import { setChoices, RootState } from '../../../Redux/rock-paper-scissors'
import s from "../../../styles/RockPaperScissors.module.scss"
import { useDispatch, useSelector } from "react-redux"

export const PlayerController: FC = () => {
   const choices = ["Rock", "Paper", "Scissors"]
   const randomPcChoice = choices[Math.floor(Math.random() * choices.length)]
   const playerChoice = useSelector((state: RootState) => state.rockPaperScissors.playerChoice)
   const victories = useSelector((state: RootState) => state.rockPaperScissors.victories)
   const dispatch = useDispatch()

   const handleChoiceClick = (choice: string) => {
      dispatch(setChoices({ playerChoice: choice, pcChoice: randomPcChoice }))
   }

   return (
      <>
         <div className={s.controller}>
            <div className={s.controller__block}>
               <h3 className={s.controller__label}>Player 1</h3>
               <div className={s.handsBlock}>
                  <button onClick={() => handleChoiceClick("Rock")} className={s.optionBtn}><GiRock className={s.btnImg} /></button>
                  <button onClick={() => handleChoiceClick("Paper")} className={s.optionBtn}><GiPaper className={s.btnImg} /></button>
                  <button onClick={() => handleChoiceClick("Scissors")} className={s.optionBtn}><GiScissors className={s.btnImg} /></button>
               </div>
               {playerChoice ? <h4 className={s.selectedOption}>Your choice: {playerChoice}</h4> : <h4 className={s.selectedOption}>Pick one!</h4>}
            </div>
            <h3 className={s.winsCounter}>{victories}</h3>
         </div>
      </>
   )
}

export default PlayerController
