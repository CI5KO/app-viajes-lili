import Image from "next/image";
import AppLogo from "@/public/app-logo.jpg";

export default function Loading() {
  return (
    <main className="bg-slate-200 dark:bg-slate-800 flex w-full h-screen">
      <Image
        src={AppLogo.src}
        alt="Viajes Lili"
        width={100}
        height={100}
        priority
        placeholder="blur"
        blurDataURL={AppLogo.blurDataURL}
        className="rounded-full animate-pulse m-auto w-fit h-fit"
      />
    </main>
  );
}
