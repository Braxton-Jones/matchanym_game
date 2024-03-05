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

export default async function Gameboard() {
  const supabase = createClient();
  let isGameInProgress = false;
  let player = "Player";
  let time = "2:00";

  const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/login");
  // }

  return (
    <section className="font-montserrat w-full text-nymText flex flex-col min-h-full flex-1 transition-all ease-in-out max-w-2xl">
      <header className="flex items-center gap-6 pb-6 w-full justify-between">
        <h1 className="font-black text-lg">
          {isGameInProgress
            ? `${`Time Remaining - `}${time}`
            : `${`Welcome Back, `}${player}`}{" "}
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
              <h2 className="font-black text-2xl">
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
          <div className="bg-nymPurple1 text-center">
            <Button
              type="button"
              className="w-full h-full bg-nymPurple2 hover:bg-nymPurple1"
            >
              <p className="font-black text-3xl font-montserrat p-6 ">
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
            placeholder="Enter here."
            className="font-cabin text-nymBackground bg-nymText"
          />
          <div></div>
        </section>
      </footer>
    </section>
  );
}
