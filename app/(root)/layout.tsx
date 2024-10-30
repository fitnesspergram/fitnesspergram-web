export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-w-screen-xl mx-auto px-2">{children}</main>
  );
}
