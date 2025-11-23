"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Session } from "@/src/lib/auth";
import { ThemeSwitcher } from "..";
import AppLogo from "@/public/app-logo.jpg";
import { MdOutlineLogout } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { SideBar } from "..";

interface HeaderProps {
  session: Session;
}

export default function Header({ session }: HeaderProps) {
  const pathname = usePathname();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <SideBar
        session={session}
        isOpen={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
      />
      <header className="flex justify-between items-center p-4 mb-8 bg-gray-100 dark:bg-gray-900 text-slate-800 dark:text-slate-200">
        <div className="flex flex-row items-center space-x-2">
          <Image
            src={AppLogo.src}
            alt="Viajes Lili"
            width={50}
            height={50}
            priority
            placeholder="blur"
            blurDataURL={AppLogo.blurDataURL}
            className="rounded-full border-2 border-slate-800 dark:border-slate-200"
          />
          <p className="text-slate-800 dark:text-slate-200 mt-2">
            {session.user.name}
          </p>
        </div>
        <section className="hidden md:flex flex-row space-x-2">
          <Link
            href="/dashboard"
            className={
              pathname === "/dashboard"
                ? "text-green-500 underline underline-offset-4"
                : "cursor-pointer"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/payments"
            className={
              pathname === "/payments"
                ? "text-green-500 underline underline-offset-4"
                : "cursor-pointer"
            }
          >
            Pagos
          </Link>
        </section>
        <FaBars
          className="text-4xl cursor-pointer"
          onClick={() => setIsSideBarOpen(true)}
        />
      </header>
    </>
  );
}
