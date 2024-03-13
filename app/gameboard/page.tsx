import React from "react";
import Keyboard from "@/components/keyboard";
import GameContent from "@/components/gamecontent";
import { GameStoreProvider } from "@/lib/store-provider";
import Timer from "@/components/timer";
import {wordsWithSynonyms} from "@/lib/words";

export type Word = {
  root: string;
  part_of_speech: string;
  context_sentence: string;
  synonyms: string[];
};

function getWord(): Word {
  const randomIndex = Math.floor(Math.random() * wordsWithSynonyms.length);
  return wordsWithSynonyms[randomIndex];
}

export default async function Gameboard() {
  const word = getWord();

  return (
    <GameStoreProvider>
      <section className="font-montserrat w-full text-nymText flex flex-col h-full flex-1 transition-all ease-in-out max-w-xl">
        <header className="flex items-center gap-6 pb-3 w-full justify-between">
          <Timer />
          {/* <Leaderboard /> */}
        </header>
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
