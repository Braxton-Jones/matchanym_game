"use client";
import React from "react";
import GameStart from "./gamestart";
import TodaysWord from "./todaysword";
import { Word } from "../app/gameboard/page";
import Tutorial from "./tutorial";
import { useGameStore } from "@/lib/store-provider";
import GameOver from "./gameover";



// word and username are passed as props
export default function GameContent({ word }: { word: Word }) {
 const  isGameInProgress = useGameStore(
    (state) => state.isGameInProgress
 );
 const gameOver = useGameStore((state) => state.gameOver);
  return (
<>
    {gameOver ? <GameOver/> : null}
    <section className="border-nymText border-2 rounded-md transition-all ease-in-out">
      {isGameInProgress ? <TodaysWord word={word} /> : <Tutorial/>}
    </section>
  </>);
}
