import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Keyboard from "@/components/keyboard";
import Leaderboard from "@/components/ui/leaderboard";
import GameContent from "@/components/gamecontent";
import { GameStoreProvider } from "@/lib/store-provider";
import Timer from "@/components/timer";


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

export default async function Gameboard() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const word = getWord();

  return (
    <GameStoreProvider>
    <section className="font-montserrat w-full text-nymText flex flex-col min-h-full flex-1 transition-all ease-in-out max-w-xl">
      <header className="flex items-center gap-6 pb-3 w-full justify-between">
        <Timer name={data?.user.email as string}/>
        <Leaderboard />
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
