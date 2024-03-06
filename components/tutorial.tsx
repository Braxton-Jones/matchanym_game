import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function Tutorial() {
  return (
    <Dialog>
      <DialogTrigger className="font-cabin bg-nymPurple1 w-full p-1 text-lg rounded-md hover:bg-nymPurple2">
        How to Play?
      </DialogTrigger>
      <DialogContent className="bg-nymBackground rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-nymText text-2xl">
            How to Play
          </DialogTitle>
          <DialogDescription className="font-cabin text-nymText pb-2">
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col items-start text-left">
                <strong className="text-lg text-nymPurple1">
                  Getting Started:
                </strong>{" "}
                When you start playing, you're given a word and its context. You
                also have to match synonyms for that word.
              </li>
              <li className="flex flex-col items-start text-left">
                <strong className="text-lg text-nymPurple1">
                  Time's Ticking:
                </strong>{" "}
                You've got 2 minutes to match as many synonyms as you can. Every
                time you match a synonym, you get 5 points and an extra 30
                seconds added to your timer.
              </li>
              <li className="flex flex-col items-start text-left">
                <strong className="text-lg text-nymPurple1">The Bonus:</strong>{" "}
                If you manage to match all the synonyms within the given time,
                you get a bonus! Your points get a nice 1.25x boost.
              </li>
              <li className="flex flex-col items-start text-left">
                <strong className="text-lg text-nymPurple1">
                  Watch the Clock:
                </strong>{" "}
                If the timer runs out before you've matched all the synonyms,
                game over. Make sure you match quickly!
              </li>
              <li className="flex flex-col items-start text-left">
                <strong className="text-lg text-nymPurple1">Game Over:</strong>{" "}
                When the game ends, you're given your final score. This score is
                added to the leaderboard for all players to see.
              </li>
              <li className="flex flex-col items-start text-left">
                <strong className="text-lg text-nymPurple1">Once a Day:</strong>{" "}
                You can only play once a day, so make it count!
              </li>
            </ul>
          </DialogDescription>
          <DialogClose className="bg-nymPurple1 p-1 rounded-md hover:bg-nymPurple2 font-cabin text-lg py-2">
            Close
          </DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
