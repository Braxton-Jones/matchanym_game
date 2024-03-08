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
import GameStart from "@/components/gamestart";
import TodaysWord from "@/components/todaysword";
import GameContent from "@/components/gamecontent";
import { GameStoreProvider } from "@/lib/store-provider";
import Timer from "@/components/timer";

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


export type Word = {
  root: string;
  part_of_speech: string;
  context_sentence: string;
  synonyms: string[];
};

function getWord(): Word {
  return {
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
  }
}

export default function Gameboard() {
  let isGameInProgress = false;
  // const supabase = createClient();
  let player = "Player";

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

  const wordMock = getWord()
  // We get the word from the server, which includes the word, its context, and its synonyms.
  // We are also getting the player's name from the server.
  // We are passing the word and the player's name to the GameContent component.
  // We are also passing the word to the Keyboard component.

  return (
    <GameStoreProvider>
    <section className="font-montserrat w-full text-nymText flex flex-col min-h-full flex-1 transition-all ease-in-out max-w-xl">
      <header className="flex items-center gap-6 pb-3 w-full justify-between">
        <Timer name={player}/>
        <Leaderboard />
      </header>
      {/* Might need to make this an comp. */}
      <GameContent word={word} />

      <footer className="mt-auto">
        <section>
          <Keyboard word={word} />
        </section>
      </footer>
    </section>
    </GameStoreProvider>
  );
}
