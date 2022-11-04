import React, { FC } from 'react'
import { GiRock, GiPaper, GiScissors } from "react-icons/gi"
import s from "../../../styles/RockPaperScissors.module.scss"
import cn from "classnames"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/rock-paper-scissors'

const imgSelector = (choice: string) => {
   if (choice === "Rock") {
      return <GiRock className={s.btnImg} />
   }
   else if (choice === "Paper") {
      return <GiPaper className={s.btnImg} />
   }
   else if (choice === "Scissors") {
      return <GiScissors className={s.btnImg} />
   }
}
export const ComputerController: FC = () => {
   const choice = useSelector((state: RootState) => state.rockPaperScissors.pcChoice)
   const defeats = useSelector((state: RootState) => state.rockPaperScissors.defeats)
   return (
      <>
         <div className={s.controller}>
            <div className={s.controller__block}>
               <h3 className={s.controller__label}>Computer</h3>
               <div className={s.handsBlock}>
                  <button className={cn(s.optionBtn, s.btnComputer)}>{choice && imgSelector(choice)}</button>
               </div>
               {choice ? <h4 className={s.selectedOption}>PC selected: {choice}</h4> : <h4 className={s.selectedOption}>Pick your choice!</h4>}
            </div>
            <h3 className={s.winsCounter}>{defeats}</h3>
         </div>
      </>
   )
}

export default ComputerController
