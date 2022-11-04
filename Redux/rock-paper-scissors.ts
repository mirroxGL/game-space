import { State } from './../types/rockPaperScissorsTypes';
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const gameLogic: any = (state: State, playerChoice: string | undefined, pcChoice: string | undefined) => {
   if (playerChoice === pcChoice) {
      return state.winner = "Draw"
   }
   else if (playerChoice === "Rock" && pcChoice === "Scissors") {
      return state.winner = "Player", state.victories += 1
   }
   else if (playerChoice === "Scissors" && pcChoice === "Paper") {
      return state.winner = "Player", state.victories += 1
   }
   else if (playerChoice === "Paper" && pcChoice === "Rock") {
      return state.winner = "Player", state.victories += 1
   }
   else return state.winner = "PC", state.defeats += 1
}

const initialState: State = {
   roundsCounter: 0,
   victories: 0,
   defeats: 0,
   playerChoice: undefined,
   pcChoice: undefined,
   winner: undefined,
}



const rockPaperScissorsSlice = createSlice({
   name: "rock-paper-scissors",
   initialState: initialState,
   reducers: {
      setChoices: (state, { payload }: PayloadAction<{ playerChoice: string, pcChoice: string }>) => {
         state.playerChoice = payload.playerChoice,
            state.roundsCounter += 1,
            state.pcChoice = payload.pcChoice,
            gameLogic(state, payload.playerChoice, payload.pcChoice)
      },
      reset: (state) => {
         state.roundsCounter = 0,
            state.victories = 0,
            state.defeats = 0,
            state.playerChoice = undefined,
            state.pcChoice = undefined,
            state.winner = undefined
      }
   }
})

const rootReducer = {
   rockPaperScissors: rockPaperScissorsSlice.reducer
}

export const store = configureStore({
   reducer: rootReducer,
   devTools: true
})

export const { setChoices, reset } = rockPaperScissorsSlice.actions

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch