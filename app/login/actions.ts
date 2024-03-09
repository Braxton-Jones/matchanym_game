"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { AuthApiError } from "@supabase/supabase-js";

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    if (error.message === "Invalid login credentials") {
      throw new Error("Invalid login credentials");
    }
  }

  if (!error) {
    revalidatePath("/", "layout");
    redirect("/gameboard");
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    
    console.log(error);
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
