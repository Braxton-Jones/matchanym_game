import { init } from 'next/dist/compiled/webpack/webpack';
import {createStore} from 'zustand/vanilla'


export type GameState = {
    isGameInProgress: boolean;
    timer: number;
    matchedSynonyms: string[];
}

export type GameActions = {
    startGame: () => void;
    endGame: () => void;
    addTime: (time: number) => void;
    countDown: () => void;
    addMatchedSynonym: (synonym: string) => void;
}

export type GameStore = GameState & GameActions;

export const defaultGameState: GameState = {
    isGameInProgress: false,
    timer: 120,
    matchedSynonyms: []
}

export const createGameStore = (
    initialState: GameState = defaultGameState
) => createStore<GameState & GameActions>((set) => ({
    ...initialState,
    startGame: () => set({ isGameInProgress: true }),
    endGame: () => set({ isGameInProgress: false }),
    addTime: (time: number) => set((state) => ({ timer: state.timer + time })),
    countDown: () => set((state) => ({ timer: state.timer - 1 })),
    addMatchedSynonym: (synonym: string) =>
        set((state) => ({
            matchedSynonyms: [...state.matchedSynonyms, synonym],
        })),
}));
