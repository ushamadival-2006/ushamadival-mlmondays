import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/component/ThemeToggle";

export const metadata = {
  title: "ML Mondays — NeuralHive",
  description: "NeuralHive ML Mondays blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">

        <header className="border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold text-lg">ML Mondays</Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/ethos">Ethos</Link>
              <ThemeToggle />

              <Link href="/write-for-us" className="hover:underline">
               Write for Us
              </Link>

            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="text-center text-gray-500 py-8">
          NeuralHive PESU ECC © {new Date().getFullYear()}
        </footer>

      </body>
    </html>
  );
}
