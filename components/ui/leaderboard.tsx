import React from "react";
import { Button } from "./button";
import Image from "next/image";
import leaderboard from "../../public/ranking.png";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Leaderboard() {
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger>
          <Button
            asChild
            variant="outline"
            className="text-sm font-montserrat font-black text-nymText bg-transparent hover:bg-nymPurple1 hover:border-nymBackground flex gap-3"
          >
            <div>
              <p className="font-black text-sm text-nymText ">Leaderboard</p>
              <Image
                src={leaderboard}
                width={15}
                height={15}
                className="invert hover:scale-105"
                alt="leaderboard icon"
              />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-nymBackground text-nymText">
          <DialogTitle>Leaderboard</DialogTitle>
          <DialogDescription>
            <div className="flex gap-2">
              <h2 className="font-black text-lg">Leaderboard</h2>
            </div>
          </DialogDescription>
          <DialogClose>
            <Button
              type="button"
              className=" h-full bg-transparent hover:bg-nymText hover:text-nymBackground border-2 border-nymText transition-all ease-in-out"
            >
              <p className="font-black text-md font-montserrat p-1 ">Close</p>
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          asChild
          variant="outline"
          className="p-2 text-sm font-montserrat font-black text-nymText bg-transparent hover:bg-nymPurple1 hover:border-nymBackground flex gap-3"
        >
          <div>
            <p className="font-black text-sm text-nymText">Leaderboard</p>
            <Image
              src={leaderboard}
              width={15}
              height={15}
              className="invert hover:scale-105"
              alt="leaderboard icon"
            />
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Leaderboard</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerDescription>
          <div className="flex gap-2">
            <h2 className="font-black text-lg">Leaderboard</h2>
            <Image
              src={leaderboard}
              width={15}
              height={15}
              className="invert"
              alt="leaderboard icon"
            />
          </div>
        </DrawerDescription>
        <DrawerFooter>
          <Link href="/leaderboard">
            <Button
              type="button"
              className="w-full h-full bg-transparent hover:bg-nymText hover:text-nymBackground border-2 border-nymText transition-all ease-in-out"
            >
              <p className="font-black text-lg font-montserrat p-1 ">
                View Leaderboard
              </p>
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
