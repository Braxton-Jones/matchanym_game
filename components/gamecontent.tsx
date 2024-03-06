'use client'
import React from 'react'
import GameStart from './gamestart'
import TodaysWord from './todaysword'
import { Word } from '../app/gameboard/page'

export default function GameContent({word}: {word: Word}) {
    const isGameInProgress = true
  return (
    <section className="border-nymText border-2 rounded-md transition-all ease-in-out">
        {isGameInProgress ? (
          <TodaysWord 
          word={word}
            /> 
        ) : (
          <GameStart />         
        )}
      </section>
  )
}
