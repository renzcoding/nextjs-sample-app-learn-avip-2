import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-9xl">404</h1>
      <h2 className="mb-5 text-xl">Page not found </h2>
      <Link href={"/"} className=" text-white bg-blue-700 p-3">
        Back to Home
      </Link>
    </div>
  );
}
