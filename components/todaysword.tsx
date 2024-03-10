"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";
import { Word } from "../app/gameboard/page";
import { useGameStore } from "@/lib/store-provider";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import Hint from "./hint";
import { useEffect } from "react";

// Word is passed as a prop
// from word we destructure the root, part_of_speech, context_sentence, and synonyms
// We need to access matchSynonyms from the store, so we can display the number of synonyms matched
export default function TodaysWord({ word }: { word: Word }) {
  const { toast } = useToast();
  const { root, part_of_speech, context_sentence, synonyms } = word;
  const matchedSynonyms = useGameStore((state) => state.matchedSynonyms);
  const endGame = useGameStore((state) => state.endGame);
  const setGameOverMessage = useGameStore((state) => state.setGameOverMessage);
  const setRemainingTime = useGameStore((state) => state.setRemainingTime);
  const remainingTime = useGameStore((state) => state.remainingTime);
  const timer = useGameStore((state) => state.timer);
  const clearTimer = useGameStore((state) => state.clearTimer);

  useEffect(() => {
    if (matchedSynonyms.length === synonyms.length) {
    }
  }, [matchedSynonyms, synonyms, timer, setRemainingTime, endGame]);

  return (
    <div className="p-4">
      <p className="font-cabin mb-2">{`Today's word is...`}</p>
      <div className="flex gap-2 justify-between items-center">
        <h2 className="font-black text-2xl">
          {`${root} - `}
          <span className="font-cabin italic">{part_of_speech}</span>
        </h2>
        <div>
          <Button
            className="bg-nymText text-nymBackground hover:bg-nymPurple1 hover:text-nymText transition-all ease-in-out"
            onClick={() => {
              toast({
                title: "Context",
                description: context_sentence,
              });
            }}
          >
            Context
          </Button>
        </div>
      </div>

      <Separator className="my-4" />
      {/* <Hint/> */}
      <div className="grid grid-cols-3 gap-1">
        {synonyms.map((synonym, index) => {
          if (matchedSynonyms.includes(synonym)) {
            return (
              <p
                key={index}
                className="font-cabin bg-nymPurple1 text-nymBackground italic text-center py-1 rounded-lg hover:bg-nymPurple1 text-sm"
              >
                {synonym}
              </p>
            );
          }
          return (
            <div
              key={index}
              className="bg-nymText text-nymBackground text-center py-1 rounded-lg hover:bg-nymPurple1 text-sm w-full min-h-7"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
