'use client'
import React from "react";
import Tutorial from "./tutorial";
import { Button } from "./ui/button";
import { useGameStore } from "@/lib/store-provider";




export default function GameStart() {
  const timer = useGameStore((state) => state.timer);
  const isGameInProgress = useGameStore((state) => state.isGameInProgress);
  const startGame = useGameStore((state) => state.startGame);

  const newGame = () => {
    if (!isGameInProgress) {
      startGame();
    }
  };
  return (
    <Button
        onClick={newGame}
        type="button"
        className="w-full h-full bg-transparent hover:bg-nymText hover:text-nymBackground border-2 border-nymText transition-all ease-in-out mb-3"
      >
        <p className="font-black text-lg font-montserrat p-1 ">
          Ready to Play?
        </p>
    </Button>
  );
}
