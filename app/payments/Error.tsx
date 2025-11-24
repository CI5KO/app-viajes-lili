"use client";

import { Card, Header } from "@/src/components";
import { Session } from "@/src/lib/auth";

interface ErrorProps {
  error: Error;
  session: Session;
}

export default function Error({ error, session }: ErrorProps) {
  return (
    <>
      <Header session={session} />
      <main className="container mx-auto p-2 pb-6">
        <Card>
          <div className="text-center text-red-500">
            <h1 className="text-2xl font-bold">Error</h1>
            <p>{error.message}</p>
          </div>
        </Card>
      </main>
    </>
  );
}
