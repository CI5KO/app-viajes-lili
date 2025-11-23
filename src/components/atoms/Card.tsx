import { type ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-slate-800 dark:text-slate-200 rounded-lg shadow p-6 w-full">
      {children}
    </div>
  );
}
