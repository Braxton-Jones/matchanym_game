"use client"
import { login, signup } from "./actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <section className="w-full max-w-[600px] h-screen mt-15">
    <Tabs defaultValue="login">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login" className="font-bold tracking-wide">
          Login
        </TabsTrigger>
        <TabsTrigger value="signup" className="font-bold tracking-wide">
          Sign up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card className="bg-nymText w-full">
          <CardHeader>
            <CardTitle className="font-black tracking-wide text-nymBackground">Login</CardTitle>
            <CardDescription className="font-cabin text-md text-nymAccent">{`Let's get you back in here!`}</CardDescription>
            <CardContent>
            </CardContent>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="bg-nymText">
          <CardHeader>
            <CardTitle className="font-black tracking-wide">Sign up</CardTitle>
            <CardDescription className="font-cabin text-md text-nymAccent">{`Welcome In! Create an account here.`}</CardDescription>
            <CardContent></CardContent>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
    </section>
  );
}

{
  /* <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form> */
}
