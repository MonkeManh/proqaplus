import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import dynamic from "next/dynamic";
import { SettingsMenu } from "./settings";

const ClientNavInfo = dynamic(() => import("./ClientNavInfo"));

export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex justify-center">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/ProQAPlus.png"
                alt="ProQA Plus Logo"
                width={100}
                height={32}
                className="rounded-sm"
              />
            </Link>
          </div>

          <ClientNavInfo />


          <div className="flex items-center">
            <ThemeToggle />
            <SettingsMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
