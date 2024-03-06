"use client";
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
import AuthForm from "@/components/authform";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <section className="w-full flex-1 mt-15 flex items-center justify-center">
      <div className="w-full max-w-xl">
        {" "}
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2 font-cabin">
            <TabsTrigger value="login" className="font-bold tracking-wide">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="font-bold tracking-wide">
              Sign up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card className="bg-transparent w-full text-nymText border-2">
              <CardHeader>
                <CardTitle className="font-black tracking-wide ">
                  Login
                </CardTitle>
                <CardDescription className="font-cabin text-md text-inherit pb-2">{`Let's get you back in here!`}</CardDescription>
                <Separator />
                <CardContent className="p-0">
                  <AuthForm type="login" />
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="bg-transparent w-full text-nymText border-2">
              <CardHeader>
                <CardTitle className="font-black tracking-wide">
                  Sign up
                </CardTitle>
                <CardDescription className="font-cabin text-md text-inherit pb-2">{`Welcome In! Create an account here.`}</CardDescription>
                <Separator />
                <CardContent className="p-0">
                  <AuthForm type="signup" />
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
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
