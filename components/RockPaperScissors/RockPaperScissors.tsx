import { FC } from "react"
import { useDispatch, useSelector } from 'react-redux'
import s from "../../styles/RockPaperScissors.module.scss"
import ComputerController from "./ComputerController/ComputerController"
import PlayerController from "./PlayerController/PlayerController"
import { RootState, reset } from "../../Redux/rock-paper-scissors"

const RockPaperScissors: FC = () => {
   const rounds = useSelector((state: RootState) => state.rockPaperScissors.roundsCounter)
   const winner = useSelector((state: RootState) => state.rockPaperScissors.winner)
   const dispatch = useDispatch()
   const resetHandler = () => {
      dispatch(reset())
   }
   return (
      <div className={s.container}>
         <div className={s.title}><h2>Rock, paper, scissors!</h2></div>
         <div className={s.roundsCounter}><h2>Round: {rounds}</h2></div>
         <div className={s.middleContainer}>
            <PlayerController />
            {winner ? <h2 className={s.vs}>{winner}</h2> : <h2 className={s.vs}>VS</h2>}
            <ComputerController />
         </div>
         <button onClick={resetHandler} className={s.resetBtn}>Reset</button>
      </div>
   )
}

export default RockPaperScissors