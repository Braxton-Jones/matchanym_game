import React from "react";
import { Button } from "./ui/button";

export default function Keyboard() {
  const keyboard = {
    letters: [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"],
    ],
    enterButton: "Enter",
  };

  return <div className="mt-3">
    <div className="w-full flex flex-col gap-2">
      {keyboard.letters.map((row, i) => (
        <div key={i} className="text-center w-full flex justify-center gap-2">
          {row.map((letter, j) => (
            <button key={j} className="border-2 w-full p-1 border-nymText rounded-sm">{letter}</button>
          ))}
        </div>
      ))}
    </div>
  </div>;
}