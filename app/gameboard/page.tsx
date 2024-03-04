import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

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

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <div>Gameboard</div>;
}
