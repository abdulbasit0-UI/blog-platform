export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-orange-500">{children}</section>;
}
