"use client";
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
import { Play } from "next/font/google";

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
  // const supabase = createClient();
  let isGameInProgress = true;
  let player = "Player";
  let time = "2:00";

  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/login");
  // }

  return (
    <section className="font-montserrat w-full text-nymText flex flex-col min-h-full flex-1 transition-all ease-in-out max-w-xl">
      <header className="flex items-center gap-6 pb-3 w-full justify-between">
        <h1 className="font-black text-lg">
          {isGameInProgress
            ? <span className="bg-nymPurple1 py-2 px-3 rounded-sm">{`Time Remaining - ${time}`}</span>
            : `Welcome Back, ${player}`}{" "}
        </h1>
        {/* Add Timer here */}
        <nav>
          <ul className="flex gap-3">
            <li>
              <Button
                asChild
                variant="outline"
                className="p-2 text-sm font-montserrat font-black text-nymText bg-transparent hover:bg-nymPurple1 hover:border-nymBackground"
              >
                <Link href="/leaderboard">
                  <Image
                    src={leaderboard}
                    width={15}
                    height={15}
                    className="invert hover:scale-105"
                    alt="leaderboard icon"
                  />
                </Link>
              </Button>
            </li>

            <li>
              <Button
                asChild
                variant="outline"
                className="p-2 text-xs font-montserrat font-black  text-nymText tracking-wide  hover:text-nymBackground bg-transparent hover:bg-nymPurple1 hover:border-nymBackground"
              >
                <Link href="/logout">Logout</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="border-nymText border-2 rounded-md transition-all ease-in-out">
        {isGameInProgress ? (
          <div className="p-4">
            <p className="font-cabin mb-2">{`Today's word is...`}</p>
            <div className="flex gap-2 flex-col">
              <h2 className="font-black text-xl">
                {`Langauge - `}
                <span className="font-cabin italic">{`noun`}</span>
              </h2>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="Context">
                    <AccordionTrigger>
                      <h3 className="font-black text-xl">Context :</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="font-cabin">
                        The method of human communication, either spoken or
                        written, consisting of the use of words in a structured
                        and conventional way.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <Separator className="my-4" />
            <p className="font-cabin">
              There are <span className="font-black">{"15"}</span> possible
              synonyms today.
            </p>
          </div>
        ) : (
          <div className="bg-transparent text-center">
            <Button
              type="button"
              className="w-full h-full bg-transparent hover:bg-nymPurple1 border-nymText border"
            >
              <p className="font-black text-2xl font-montserrat p-3 ">
                Ready to Play?
              </p>
            </Button>
          </div>
        )}
      </section>
      <footer className="mt-auto">
        <section>
          <Input
            type="text"
            placeholder={isGameInProgress ? "Enter here." :  `Press "Play" to start.`}
            className="font-cabin"
            disabled={!isGameInProgress}
          />
          <Keyboard />
        </section>
      </footer>
    </section>
  );
}
