"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();
  return (
    <div>
      <h1>thisss is prorfille</h1>
      <h2>{session && session?.user?.fullname}</h2>
    </div>
  );
}
