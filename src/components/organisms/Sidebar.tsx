"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "..";
import { Session } from "@/src/lib/auth";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

interface SideBarProps {
  isOpen: boolean;
  session: Session;
  onClose: () => void;
}

export default function SideBar({ isOpen, session, onClose }: SideBarProps) {
  const pathname = usePathname();
  return (
    <aside
      className="h-full w-full md:w-1/2 bg-gray-100 dark:bg-gray-900 text-slate-800 dark:text-slate-200 p-4 rounded-lg shadow-lg fixed top-0 right-0 z-10 flex flex-col gap-4 transition-all duration-300 ease-in-out"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
    >
      <IoMdClose
        className="cursor-pointer self-end text-2xl hover:rotate-90 transition-all duration-100 ease-in-out"
        onClick={onClose}
      />
      <section className="flex flex-col">
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
      {/* Notificaciones */}

      {/* Notificaciones */}
      <section className="w-full flex flex-row justify-between items-center space-x-2 absolute bottom-4">
        <ThemeSwitcher />
        <form
          action="/auth/logout"
          method="GET"
          className="text-2xl bg-red-500 rounded-lg py-2 px-6 cursor-pointer mr-8 sm:mr-6"
        >
          <MdOutlineLogout />
        </form>
      </section>
    </aside>
  );
}
