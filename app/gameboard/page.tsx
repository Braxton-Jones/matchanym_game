import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import leaderboard from "@/public/ranking.png";
import Keyboard from "@/components/keyboard";
import { motion } from "framer-motion";
import Tutorial from "@/components/tutorial";
import Leaderboard from "@/components/ui/leaderboard";

{
  /*
    Game Rules to Implement:

- User is given a word, its context, and the maximum number of synonyms to match.
- User has 2 minutes to match as many synonyms as possible.
- If the user matches a synonym, they get 5 points and 30 seconds added to the timer.
- If the user matches all synonyms, they get a bonus of 1.25x points.
- If the timer runs out, the game ends.
- When the game ends, the user is given a score, and their score is added to the leaderboard.
- There is one leaderboard for all users.
- A user can only play once a day.
- A user can only play if they are logged in.

 */
}

export default function Gameboard() {
  let isGameInProgress = true;
  // const supabase = createClient();
  let player = "Player";
  let time = "2:00";

  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/login");
  // }
  const word = {
    root: "Language",
    part_of_speech: "noun",
    context_sentence: `The method of human communication, either spoken or
    written, consisting of the use of words in a structured
    and conventional way.`,
    synonyms: [
      "tongue",
      "vernacular",
      "dialect",
      "speech",
      "communication",
      "lingo",
      "idiom",
      "vocabulary",
      "lexicon",
      "jargon",
      "expression",
      "phraseology",
      "terminology",
      "parlance",
      "communication",
    ],
  };

  return (
    <section className="font-montserrat w-full text-nymText flex flex-col min-h-full flex-1 transition-all ease-in-out max-w-xl">
      <header className="flex items-center gap-6 pb-3 w-full justify-between">
        <h1 className="font-black text-lg">
          {isGameInProgress ? (
            <span className="bg-nymPurple1 py-2 px-3 rounded-sm text-sm">{`Time Remaining - ${time}`}</span>
          ) : (
            `Welcome Back, ${player}`
          )}{" "}
        </h1>
        <Leaderboard/>
      </header>
      <section className="border-nymText border-2 rounded-md transition-all ease-in-out">
        {isGameInProgress ? (
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
              There are{" "}
              <span className="font-black">{word.synonyms.length}</span>{" "}
              possible synonyms today.
            </p>
          </div>
        ) : (
          <div className="bg-transparent text-center p-1 flex gap-2">
            <Tutorial />
            <Button
              type="button"
              className="w-full h-full bg-transparent hover:bg-nymText hover:text-nymBackground border-2 border-nymText transition-all ease-in-out"
            >
              <p className="font-black text-lg font-montserrat p-1 ">
                Ready to Play?
              </p>
            </Button>
          </div>
        )}
      </section>
      <footer className="mt-auto">
        <section>
          <Keyboard isGameInProgress={isGameInProgress} todaysWord={word} />
        </section>
      </footer>
    </section>
  );
}
