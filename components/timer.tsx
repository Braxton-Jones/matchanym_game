"use client";
import React from "react";
import { useGameStore } from "@/lib/store-provider";

export default function Timer() {
  const isGameInProgress = useGameStore((state) => state.isGameInProgress);
  const time = useGameStore((state) => state.timer);
  return (
    <h1 className="font-black text-md ">
      {isGameInProgress ? (
        <span className="bg-nymPurple1 py-2 px-3 rounded-sm text-sm">{`Time Remaining - ${time} sec${time > 1 ? "s" : ""}`}</span>
      ) : (
        <span suppressHydrationWarning>{`
        Press the 'Ready to Play' button to begin!
        `}</span>
      )}{" "}
    </h1>
  );
}
