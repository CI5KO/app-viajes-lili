"use client";

import Image from "next/image";
import { useState } from "react";
import { Input, Button, ThemeSwitcher } from "@/src/components";
import { FaMicrosoft } from "react-icons/fa";
import AppLogo from "@/public/app-logo.jpg";

export default function HomeClient() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleMicrosoftLogin = () => {
    setLoading(true);
    window.location.href = "/auth/callback";
  };

  return (
    <>
      <main className="flex items-center justify-between container h-screen mx-auto">
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
            <Button onClick={handleMicrosoftLogin}>Log In</Button>
            <ThemeSwitcher />
          </div>
          <button
            onClick={handleMicrosoftLogin}
            disabled={loading}
            className="w-full cursor-pointer bg-slate-800 text-slate-200 dark:bg-slate-200 dark:text-slate-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3"
          >
            <FaMicrosoft size={20} />
            {loading ? "Iniciando sesión..." : "Iniciar sesión con Microsoft"}
          </button>
        </section>
      </main>
    </>
  );
}
