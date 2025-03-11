import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: session, status }: { data: any; status: string } = useSession();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const { status }: { status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 py-3 px-5 justify-between">
      <div className="flex items-center text-white h-10">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-6 ${
                pathname === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-6 ${
                pathname === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-6 ${
                pathname === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`mr-6 ${
                pathname === "/contact" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex">
            <Image
              className="rounded-full w-10 h-10 mr-3"
              src={session?.user?.image || `/images/profile-pic.jpg`}
              alt="avatar"
              width={30}
              height={30}
            />
            <h4 className="text-white mr-5">{session?.user?.username}</h4>
            <button
              className="bg-white rounded-md px-3 h-7 cursor-pointer"
              // onClick={() => router.push("/login")}
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white rounded-md px-3 h-7 cursor-pointer"
            // onClick={() => router.push("/login")}
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
