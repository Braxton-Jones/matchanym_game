import {create } from 'zustand'

export type GameState = {
    word: {
        root: string;
        part_of_speech: string;
        context_sentence: string;
        synonyms: string[];
    },
    isGameInProgress: boolean;
    timer: number;
    score: number;
}

export type GameActions = {
    startGame: () => void;
    endGame: () => void;
    resetGame: () => void;
    updateScore: (newScore: number) => void;
}

export const useGameStore = create<GameState & GameActions>((set) => ({
    word: {
        root: "",
        part_of_speech: "",
        context_sentence: "",
        synonyms: []
    },
    isGameInProgress: false,
    timer: 120,
    score: 0,
    startGame: () => set({ isGameInProgress: true }),
    endGame: () => set({ isGameInProgress: false }),
    resetGame: () => set({ isGameInProgress: false, timer: 120, score: 0 }),
    updateScore: (newScore: number) => set({ score: newScore })
}))