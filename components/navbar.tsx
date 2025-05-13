import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex justify-center">
        <div className="container flex h-16 items-center justify-between relative">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/ProQAPlus.png"
                alt="ProQA Plus Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="font-bold text-xl hidden sm:inline-block">
                ProQA Plus
              </span>
            </Link>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden h-full items-center justify-center lg:flex">
            <nav className="flex items-center gap-2 text-sm">
              <Link
                href="/protocols"
                className="px-4 py-2 rounded-md font-medium transition-all hover:bg-muted hover:text-primary"
              >
                Protocols
              </Link>
              <Link
                href="/response-plans"
                className="px-4 py-2 rounded-md font-medium transition-all hover:bg-muted hover:text-primary"
              >
                Response Plans
              </Link>
              <Link
                href="/glossary"
                className="px-4 py-2 rounded-md font-medium transition-all hover:bg-muted hover:text-primary"
              >
                Glossary
              </Link>
            </nav>
          </div>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
