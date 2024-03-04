import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function LandingPage() {
  return (
    <main className="bg-nymBackground flex items-center flex-col font-montserrat px-3 py-6 min-h-screen ">
      <div className="w-full max-w-2xl flex items-center flex-col gap-6">
      <header>
        <h4 className="text-nymText font-black text-xl">Matchanym</h4>
      </header>
      <section>
        <h1 className="text-nymText font-black text-5xl text-center px-4 w-full">
          Your Next Favorite Word Game is being made right <span className="text-nymPurple1 text-center">now</span>...
        </h1>
      </section>
      <section className="mt-6 flex flex-col gap-6 2xl:gap-12 ">
        <div>
          <h3 className="font-montserrat text-lg font-black text-nymText tracking-wide">Introducing Matchanym:</h3>
          <p className="text-nymText leading-relaxed font-cabin tracking-wide">
            Matchanym is a word game that challenges you to match words with
            their synonyms. It's a fun way to expand your vocabulary and
            challenge your brain. It's currently in development, but you can check out the progress here <Link href={"https://twitter.com/brxjonesdev"} className="bg-nymPurple1 p-1 rounded-sm hover:bg-nymPurple2">@brxjonesdev</Link>
          </p>
        </div>
        <div>
          <h3 className="font-montserrat text-lg font-black text-nymText tracking-wide">{`How to Play (Tentative)`}:</h3>
          <p className="text-nymText leading-relaxed font-cabin tracking-wide">
            You'll be given 5 words a day. Each word you will have 1 minute and 30 seconds to match as many synonyms as you can. The more you match, the more points you get. The more points you get, the more you can brag to your friends on the leaderboard.
          </p>
        </div>
        
        <Card className="bg-nymPurple2 border-0 font-montserrat w-full">
        <CardHeader>
          <CardTitle className="font-montserrat font-black text-nymText tracking-wide">Get Notified</CardTitle>
          <CardDescription className="font-cabin text-nymText">
            Sign up to be notified when Matchanym is read to play.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-3">
            <label htmlFor="email" className="font-montserrat text-nymText font-black tracking-wide">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              className="rounded-md p-2 bg-nymText text-nymBackground font-semibold font-cabin tracking-wide focus:ring-nymPurple1 focus:border-nymPurple1 transition-all duration-300 ease-in-out"

            />
            <button
              type="submit"
              className="bg-nymPurple1 text-nymText rounded-md p-2 hover:scale-105 transition-all duration-300 ease-in-out font-montserrat font-black tracking-wide"
            >
              Submit
            </button>
          </form>
        </CardContent>
      </Card>
      </section>
      
      </div>
    
    </main>
  );
}
