import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps): ReactNode {
  return (
    <button
      onClick={onClick}
      className="w-full cursor-pointer rounded-lg border p-1 border-green-500 bg-green-300 dark:border-green-700 dark:bg-green-600"
    >
      {children}
    </button>
  );
}
