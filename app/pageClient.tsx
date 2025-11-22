"use client";

import Image from "next/image";
import { useState } from "react";
import { Input, Button, ThemeSwitcher } from "@/src/components";

import { montserrat } from "@/src/fonts/Montserrat";
import AppLogo from "@/public/app-logo.jpg";

export default function HomeClient() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <main
        style={montserrat.style}
        className="flex items-center justify-between container h-screen mx-auto"
      >
        <section className="flex flex-col w-full md:w-1/2 mx-auto items-center justify-between space-y-4 px-2">
          <Image
            src={AppLogo.src}
            alt="Viajes Lili"
            width={AppLogo.width}
            height={AppLogo.height}
            priority
            placeholder="blur"
            blurDataURL={AppLogo.blurDataURL}
            className="rounded-full border-2 border-slate-800 dark:border-slate-200"
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={setUsername}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div className="w-full flex flex-row space-x-2">
            <Button onClick={() => null}>Log In</Button>
            <ThemeSwitcher />
          </div>
        </section>
      </main>
    </>
  );
}
