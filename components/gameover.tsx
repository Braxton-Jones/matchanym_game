"use client";
import React, { use } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGameStore } from "@/lib/store-provider";
import { Progress } from "@/components/ui/progress";
import { Separator } from "./ui/separator";

export default function GameOver() {
  const message = useGameStore((state) => state.gameOverMessage);
  const matchedSynonyms = useGameStore((state) => state.matchedSynonyms);
  const resetTheWorld = useGameStore((state) => state.clearGame);
  const remainingTime = useGameStore((state) => state.remainingTime);
  const score = (matchedSynonyms.length / 9) * 100;
  const totalScore = Math.floor(score * 10) * remainingTime;
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-nymBackground bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      {/* Modal Content */}
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md z-20 mx-6 bg-nymText">
          <CardHeader>
            <CardTitle className="font-montserrat font-black">
              Game Over
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {/* Dummy Stats */}
              <p className="font-montserrat font-bold text-xl">Your Stats</p>
              <Separator className="bg-nymBackground" />
              <div className="flex flex-col gap-2">
                <p className="font-cabin">{matchedSynonyms.length === 9 ? "You got the all matches!" : ""}</p>
                <p className="font-cabin ">
                  Words Matched: {matchedSynonyms.length} match
                  {matchedSynonyms.length > 1 ? "es" : ""}.

                </p>
                <div className="flex gap-1 flex-wrap justify-start">
                  {matchedSynonyms.map((synonym, index) => (
                    <p
                      key={index}
                      className="font-cabin text-sm italic bg-nymBackground w-fit p-1 px-2 rounded-sm text-nymText"
                    >
                      {synonym}
                    </p>
                  ))}
                </div>
                <Progress value={score} className="bg-nymBackground h-2" />
              </div>

              <div>
                <p className="font-cabin text-lg font-bold">
                  Total Score: {totalScore} points
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <button
              onClick={resetTheWorld}
              className="transition-all ease-in-out w-full bg-nymBackground text-nymText p-2 rounded-sm font-black tracking-wider hover:invert hover:border-nymBackground"
            >
              Home
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
