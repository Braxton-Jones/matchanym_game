'use client'
import React from "react";
import Tutorial from "./tutorial";
import { Button } from "./ui/button";
import { useGameStore } from "@/lib/store-provider";
import { set } from "zod";
import { match } from "assert";




export default function GameStart() {
  const { 
    timer, 
    startTimer,
    startGame,
    updateTimer,
    endGame,
    setGameOverMessage,
    setRemainingTime,
    matchedSynonyms
    } = useGameStore(
    (state) => ({ 
      timer: state.timer, 
      startTimer: state.startTimer,
      updateTimer: state.updateTimer,
      startGame: state.startGame,
      endGame: state.endGame,
      setGameOverMessage: state.setGameOverMessage,
      setRemainingTime: state.setRemainingTime,
      matchedSynonyms: state.matchedSynonyms
    })
  );
 

  const newGame = () => {
    startGame();
    startTimer(timer);

  const interval = setInterval(() => {
    updateTimer(1);
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    setGameOverMessage("Time's Up!");
    endGame();
  }, (timer + 1) * 1000);

  if(matchedSynonyms.length === 1){
    clearInterval(interval);
    setGameOverMessage("You Win!");
    endGame();
  };
}
  
  
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
