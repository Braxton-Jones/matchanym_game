import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="w-full max-w-xl flex items-center flex-col gap-6 h-full">
      <section>
        <h1 className="text-nymText font-black text-5xl text-center px-4 w-full">
          {`Welcome to your new`}
          {` `}
          <span className="text-nymPurple1 text-center">favorite</span>
          {` `}
          {`word game.`}
        </h1>
      </section>
      <section className="mt-6 flex flex-col gap-6 2xl:gap-12 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-montserrat text-lg font-black text-nymText tracking-wide">
            Introducing Matchanym:
          </h3>
          <p className="text-nymText leading-relaxed font-cabin tracking-wide">
            {`Matchanym is a word game that challenges you to match words with
      their synonyms. It's a fun way to expand your vocabulary and
      challenge your brain. `}
          </p>

          <p className="text-nymText leading-relaxed font-cabin tracking-wide">
            {`Matchanym is a word game that challenges you to match words with
      their synonyms. It's a fun way to expand your vocabulary and
      challenge your brain. `}
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          className="font-montserrat font-black bg-nymPurple1 border-0 hover:bg-nymPurple2 text-nymText tracking-wide text-lg hover:text-nymBackground"
        >
          <Link href="/gameboard">Let's Play !</Link>
        </Button>
      </section>
      <footer className="w-full bg-nymBackground2 rounded-full">
        <p className="text-nymText text-center p-4 text-lg">
          Developed with Love by{" "}
          <Link
            href="https://twitter.com/brxjonesdev"
            className="font-cabin bg-nymPurple1 rounded-lg px-3 py-1"
          >
            brxjonesdev
          </Link>
        </p>
      </footer>
    </div>
  );
}
