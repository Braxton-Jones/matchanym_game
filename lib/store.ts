import { init } from 'next/dist/compiled/webpack/webpack';
import {createStore} from 'zustand/vanilla'
import { useGameStore } from './store-provider';


export type GameState = {
    isGameInProgress: boolean;
    gameOver: boolean;
    timer: number;
    remainingTime: number;
    gameOverMessage: string;
    matchedSynonyms: string[];
}

export type GameActions = {
    startGame: () => void;
    endGame: () => void;
    clearGame: () => void;
    addTime: (time: number) => void;
    startTimer: (time: number) => void;
    updateTimer: (time: number) => void;
    setGameOverMessage: (message: string) => void;
    setRemainingTime: (time: number) => void;
    addMatchedSynonym: (synonym: string) => void;
    clearTimer: () => void;
}

export type GameStore = GameState & GameActions;

export const defaultGameState: GameState = {
    isGameInProgress: false,
    gameOver: false,
    gameOverMessage: "",
    remainingTime: 0,
    timer: 260,
    matchedSynonyms: []
}
export const createGameStore = (
    initialState: GameState = defaultGameState
) => createStore<GameState & GameActions>((set) => ({
    ...initialState,
    startGame: () => set({ isGameInProgress: true }),
    endGame: () => set({ gameOver: true }),
    clearTimer: () => set({ timer: 0 }),
    clearGame: () => set(defaultGameState),
    setGameOverMessage: (message: string) => set({ gameOverMessage: message }),
    addTime: (time: number) => set((state) => ({ timer: state.timer + time })), 
    startTimer: (time: number) => set({ timer: time }),
    updateTimer: (time: number) => set((state) => ({ timer: state.timer - time })),
    setRemainingTime: (time: number) => set({ remainingTime: time }),
    addMatchedSynonym: (synonym: string) => {
        set((state) => ({
            matchedSynonyms: [...state.matchedSynonyms, synonym],
        }));
    },
}));

