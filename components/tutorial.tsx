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
      <DialogTrigger className="w-full py-2 text-lg rounded-md hover:bg-nymPurple1 font-black">
        How to Play?
      </DialogTrigger>
      <DialogContent className="bg-nymBackground rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-nymText text-2xl font-black tracking-wider">
            How to Play
          </DialogTitle>
          <DialogDescription className="font-cabin text-nymText p-0">
            <ul className=" px-3">
              <li className="mb-4">
                <p className="text-nymText">
                  Matchanym is a word game designed to challenge your vocabulary
                  and cognitive skills by matching words with their synonyms.
                  It's an engaging way to expand your linguistic knowledge and
                  exercise your mind.
                </p>
              </li>
              <li className="mb-4">
                <p className="text-nymText">
                  To begin, click on the "Ready to Play?" button. You'll be
                  presented with a word. Your objective is to identify all nine
                  synonyms for the given word.
                </p>
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
