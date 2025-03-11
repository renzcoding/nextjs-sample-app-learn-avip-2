export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 z-32 h-screen w-60 bg-gray-800">
        <ul className="text-white px-4 py-2">
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
