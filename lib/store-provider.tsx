'use client'
import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'
import { type GameStore, createGameStore } from './store'

export const GameContext = createContext<StoreApi<GameStore> | null>(
    null,
  )

  export type GameStoreProviderProps = {
    children: ReactNode
  }

  export const GameStoreProvider = ({ children }: GameStoreProviderProps) => {
    const store = useRef(createGameStore())
    return (
      <GameContext.Provider value={store.current}>{children}</GameContext.Provider>
    )
  }

  export const useGameStore = <T,>(
    selector: (store: GameStore) => T,
  ): T => {
    const gameStoreContext = useContext(GameContext)
    if (!gameStoreContext) {
      throw new Error('useGameStore must be used within a GameStoreProvider')
    }
    return useStore(gameStoreContext, selector)
  }
  

