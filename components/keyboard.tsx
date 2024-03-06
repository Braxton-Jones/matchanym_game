'use client';
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { set } from "react-hook-form";
import { motion } from "framer-motion"

export default function Keyboard({ isGameInProgress, todaysWord }: { isGameInProgress: boolean, todaysWord: any}) {
  const [input, setInput] = useState("");
  const { root, context_sentence, synonyms } = todaysWord;
  useEffect(() => {
    const handleKeyDown = (event: { key: any; }) => {
      const keyPressed = event.key;
  
      if (/^[a-zA-Z]$/.test(keyPressed)) {
        setInput(input + keyPressed);
      }

      if (keyPressed === "Backspace") {
        setInput(input.slice(0, -1));
      }

      if (keyPressed === "Enter") {
        handleEnter()
      }
      if (keyPressed === " ") {
        setInput(input + " ");
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);
  


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
    } 
    else if (value === "Enter") {
      handleEnter()
    } 
    else {
      if (input.length > 0) {
        setInput(input + value.toLocaleLowerCase());
      } else{
        setInput(input + value);
      
      }
    }
  }

  function handleEnter() {
    // Check if input is a string with a length greater than 0
    // Check if synonyms includes the input, if it does, add 5 point, 30 seconds to the timer and clear the input.
    // If synonyms does not include the input, throw an error animation.

  }
  

  return (
    <section>
      <Input
        type="text"
        placeholder={isGameInProgress ? "Enter here." : `Press 'Play' to start.`}
        className="font-cabin tracking-wider"
        disabled={!isGameInProgress}
        value={input}
      />
      <div className="mt-3">
        <div className="w-full flex flex-col gap-2">
          {keyboard.letters.map((row, i) => (
            <div key={i} className="text-center w-full flex justify-center gap-2">
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
  );
}