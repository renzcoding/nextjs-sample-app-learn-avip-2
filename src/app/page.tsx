import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "this is home page",
  authors: [{ name: "Budi", url: `${process.env.NEXT_PUBLIC_API_URL}` }],
  icons: "/icon.jpg",
  openGraph: {
    title: "Home",
    description: "this is home page",
    images: "/icon.jpg",
  },
};

export default function Home() {
  // throw new Error("something wrong");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        hello world
      </main>
    </div>
  );
}
