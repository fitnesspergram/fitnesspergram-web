export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-auth-img bg-cover object-center">
      {children}
    </div>
  ); // Render without any layout
}
