import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";
import { Word } from "../app/gameboard/page";

export default function TodaysWord({ word }: { word: Word }) {
  const { root, part_of_speech, context_sentence, synonyms } = word;
  return (
    <div className="p-4">
      <p className="font-cabin mb-2">{`Today's word is...`}</p>
      <div className="flex gap-2 flex-col">
        <h2 className="font-black text-xl">
          {`${word.root} - `}
          <span className="font-cabin italic">{word.part_of_speech}</span>
        </h2>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="Context">
              <AccordionTrigger>
                <h3 className="font-black text-xl">Context :</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-cabin">{word.context_sentence}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Separator className="my-4" />
      <p className="font-cabin">
        There are <span className="font-black">{word.synonyms.length}</span>{" "}
        possible synonyms today.
      </p>
    </div>
  );
}
