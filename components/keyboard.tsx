"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { set } from "react-hook-form";
import { motion } from "framer-motion";
import { Word } from "../app/gameboard/page";
import { useGameStore } from "@/lib/store-provider";
import GameStart from "./gamestart";
import { toast, useToast } from "@/components/ui/use-toast";
import { start } from "repl";

// word is passed as a prop
// from word we destructure the synonyms
// when a user presses enter it does the following:
// - check if input is a string with a length greater than 0
// - check if synonyms includes the input, if it does:
//    - add 5 points to the score
//    - add 30 seconds to the timer
//    - update the matchedSynonyms state
//    - clear the input
// - if synonyms does not include the input, throw an error animation
export default function Keyboard({ word }: { word: Word }) {
  const [input, setInput] = useState("");
  const { root, context_sentence, synonyms } = word;
  const {
    isGameInProgress,
    addMatchedSynonym,
    matchedSynonyms,
    setRemainingTime,
    timer,
    endGame,
    setGameOverMessage,
    clearTimer,
    startTimer,
    startGame,
    updateTimer,
    setTimerInterval,
    timerInterval,
  } = useGameStore((state) => ({
    isGameInProgress: state.isGameInProgress,
    addMatchedSynonym: state.addMatchedSynonym,
    matchedSynonyms: state.matchedSynonyms,
    setRemainingTime: state.setRemainingTime,
    timer: state.timer,
    endGame: state.endGame,
    setGameOverMessage: state.setGameOverMessage,
    clearTimer: state.clearTimer,
    startTimer: state.startTimer,
    startGame: state.startGame,
    updateTimer: state.updateTimer,
    setTimerInterval: state.setTimerInterval,
    timerInterval: state.timerInterval,
  }));

  const { toast } = useToast();
  useEffect(() => {
    const handleKeyDown = (event: { key: any }) => {
      const keyPressed = event.key;

      if (/^[a-zA-Z]$/.test(keyPressed)) {
        setInput(input + keyPressed);
      }

      if (keyPressed === "Backspace") {
        setInput(input.slice(0, -1));
      }

      if (keyPressed === "Enter") {
        handleEnter();
      }
      if (keyPressed === " ") {
        setInput(input + " ");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, handleEnter()]);

  useEffect(() => {
    if (matchedSynonyms.length === synonyms.length) {
      clearInterval(timerInterval);
      setRemainingTime(timer);
      endGame();
    }
    if (timer === 0) {
      clearInterval(timerInterval);
      setRemainingTime(0);
      setGameOverMessage("Time's Up!");
      endGame();
    }
  }, [
    matchedSynonyms,
    timer,
    endGame,
    setRemainingTime,
    timerInterval,
    synonyms.length,
    setGameOverMessage,
  ]);

  const keyboard = {
    letters: [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Enter", "Z", "X", "C", "V", "B", "N", "M", "<"],
    ],
    enterButton: "Enter",
  };

  function handleKeyboardClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.currentTarget.value, input);
    const value = e.currentTarget.value;

    if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "Enter") {
      handleEnter();
    } else {
      if (input.length > 0) {
        setInput(input + value.toLocaleLowerCase());
      } else {
        setInput(input + value);
      }
    }
  }

  function handleEnter() {
    // update for duplicate synonyms and adding time
    if (input.length > 0) {
      if (synonyms.includes(input.toLowerCase())) {
        toast({
          title: "Correct!",
          description: "You found a synonym!",
          variant: "matchanym",
        });
        addMatchedSynonym(input);
        setInput("");
      } else {
        toast({
          title: "Incorrect!",
          description: "That's not a synonym.",
          variant: "destructive",
        });
        setInput("");
      }
    }
  }

  // Timer logic
  const startNewGame = (): void => {
    startGame();
    startTimer(240);
    const countdownInterval = setInterval(() => {
      updateTimer(1);
    }, 1000);
    setTimerInterval(countdownInterval);
  };

  return (
    <>
      {/* Seperate the button into its own comp for gamestate */}
      {!isGameInProgress ? (
        <GameStart
          newGame={() => {
            startNewGame();
          }}
        />
      ) : null}
      <section>
        <Input
          type="text"
          placeholder={
            isGameInProgress ? "Enter here." : `Press 'Play' to start.`
          }
          className="font-cabin tracking-wider"
          disabled={!isGameInProgress}
          value={input}
          onChange={(e) => {
            return null;
          }}
        />
        <div className="mt-3">
          <div className="w-full flex flex-col gap-2">
            {keyboard.letters.map((row, i) => (
              <div
                key={i}
                className="text-center w-full flex justify-center gap-2"
              >
                {row.map((letter, j) => (
                  <button
                    key={j}
                    className="border-2 w-full p-1 border-nymText rounded-sm"
                    value={letter}
                    onClick={handleKeyboardClick}
                    disabled={!isGameInProgress}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
