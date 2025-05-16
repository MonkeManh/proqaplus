import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Dispatch2.png"
          alt="Emergency dispatch center"
          fill
          className="object-cover brightness-25"
          objectPosition="50% 30%"
          priority
        />
      </div>

      <div className="flex justify-center px-4 md:px-6 relative z-20">
        <div className="container flex flex-col items-center gap-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About ProQA Plus
          </h1>
          <p className="max-w-[800px] text-lg sm:text-xl text-white/90 mb-4">
            ProQA Plus is a comprehensive emergency dispatch system designed to
            streamline response protocols and improve outcomes in critical
            situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/protocols">Explore Protocols</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-background/20 hover:bg-background/30 border-white/20 text-white"
            >
              <Link href="/glossary">View Glossary</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
