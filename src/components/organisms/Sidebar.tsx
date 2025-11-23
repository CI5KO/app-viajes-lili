"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "..";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "@/src/store/hooks";
import { removeNotification } from "@/src/store/notificationsSlice";
import { FaCheck, FaExclamationTriangle, FaTimes } from "react-icons/fa";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
  const pathname = usePathname();
  const notifications = useAppSelector(
    (state) => state.notifications.notifications
  );
  const dispatch = useAppDispatch();
  return (
    <aside
      className="h-full w-full md:w-1/2 bg-gray-100 dark:bg-gray-900 text-slate-800 dark:text-slate-200 p-4 rounded-lg shadow-lg fixed top-0 right-0 z-10 flex flex-col gap-4 transition-all duration-300 ease-in-out"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
    >
      <IoMdClose
        className="cursor-pointer self-end text-2xl hover:rotate-90 transition-all duration-100 ease-in-out"
        onClick={onClose}
      />
      <section className="flex flex-row space-x-2">
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
      <section className="flex-1 overflow-y-auto">
        <h3 className="font-semibold mb-2">Notificaciones</h3>
        <div className="space-y-2">
          {notifications.length === 0 ? (
            <p className="text-sm text-gray-500">No hay notificaciones</p>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-3 rounded-lg border ${
                  notif.type === "ok"
                    ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                    : notif.type === "warning"
                    ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500"
                    : "bg-red-50 dark:bg-red-900/20 border-red-500"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-2">
                    {notif.type === "ok" && (
                      <FaCheck className="text-green-500 mt-1" />
                    )}
                    {notif.type === "warning" && (
                      <FaExclamationTriangle className="text-yellow-500 mt-1" />
                    )}
                    {notif.type === "error" && (
                      <FaTimes className="text-red-500 mt-1" />
                    )}
                    <div>
                      <p className="font-semibold text-sm">{notif.title}</p>
                      <p className="text-xs">{notif.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(notif.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <IoMdClose
                    className="cursor-pointer text-lg hover:scale-110 transition-transform"
                    onClick={() => dispatch(removeNotification(notif.id))}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </section>
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
