'use client';
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


// Word is passed as a prop
// from word we destructure the root, part_of_speech, context_sentence, and synonyms
// We need to access matchSynonyms from the store, so we can display the number of synonyms matched
export default function TodaysWord({ word }: { word: Word }) {
  const { root, part_of_speech, context_sentence, synonyms } = word;
  const matchedSynonyms = useGameStore((state) => state.matchedSynonyms);
  return (
    <div className="p-4">
      <p className="font-cabin mb-2">{`Today's word is...`}</p>
      <div className="flex gap-2 flex-col">
        <h2 className="font-black text-xl">
          {`${root} - `}
          <span className="font-cabin italic">{part_of_speech}</span>
        </h2>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="Context">
              <AccordionTrigger>
                <h3 className="font-black text-xl">Context :</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-cabin">{context_sentence}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Separator className="my-4" />
      {matchedSynonyms ? (<p className="font-cabin">
      {matchedSynonyms.length === 0 ? 
      "GLHF! You haven't found any synonyms yet."
      :
      `You've found ${matchedSynonyms.length} out of ${synonyms.length} available synonyms.`}
      
      </p>):(<p className="font-cabin">
        There are <span className="font-black">{synonyms.length}</span>{" "}
        possible synonyms for this word.
      </p>)}
      {matchedSynonyms.length > 0 ? (<div className="flex gap-2 flex-wrap mt-2">
      {matchedSynonyms.map((synonym, index) => {
        return (
          <p className="font-cabin bg-nymText text-nymBackground italic px-2 rounded-lg hover:bg-nymPurple1">{synonym}</p>
        );
      })}
      </div>) : (null)}
      
    </div>
  );
}
