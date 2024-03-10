'use client'
import React from "react";
import Tutorial from "./tutorial";
import { Button } from "./ui/button";
import { useGameStore } from "@/lib/store-provider";
import { set } from "zod";
import { match } from "assert";
import { useEffect } from "react";




export default function GameStart({ newGame }: { newGame: () => void}){
 

//   const newGame = () => {
//     startGame();
//     startTimer(timer);

//   const interval = setInterval(() => {
//     updateTimer(1);
//   }, 1000);
//   setTimeout(() => {
//     clearInterval(interval);
//     setGameOverMessage("Time's Up!");
//     endGame();
//   }, (timer + 1) * 1000);
// }

  
  
  return (
    <Button
        onClick={newGame}
        type="button"
        className="w-full h-full bg-transparent hover:bg-nymText hover:text-nymBackground border-2 border-nymText transition-all ease-in-out mb-3"
      >
        <p className="font-black text-lg font-montserrat">
          Ready to Play?
        </p>
    </Button>
  );
}
