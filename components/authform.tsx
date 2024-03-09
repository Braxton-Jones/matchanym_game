"use client";
import { useForm } from "react-hook-form";
import React from "react";
import authSchema from "@/lib/types";
import type { TAuthSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { login, signup } from "@/app/login/actions";
import { useToast } from "@/components/ui/use-toast"



export default function AuthForm(auth: { type: string }): React.JSX.Element {
  const { toast } = useToast();
  const form = useForm<TAuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: TAuthSchema) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (auth.type === "login") {
      login(formData)
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        toast({
          title: "Invalid login credentials",
          description: "Please try again",  
        })
      });
    } else {
      signup(formData);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  {...field}
                  className="text-nymText w-full italic "
                />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  {...field}
                  className="text-nymText italic"
                  type="password"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.password?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-nymPurple1 hover:bg-nymPurple2 font-cabin text-md mt-6"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
