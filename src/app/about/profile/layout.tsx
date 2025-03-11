export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h3>Title</h3>
      <div>{children}</div>
    </>
  );
}
