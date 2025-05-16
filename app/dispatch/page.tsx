"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Settings } from "lucide-react";
import DispatchTable from "@/components/dispatch/dispatch-table";
import Link from "next/link";

export default function DispatchPage() {

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <header className="flex justify-center w-full my-12">
        <div className="container flex justify-between">
          <h1 className="text-2xl font-bold">Dispatch Panel</h1>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="flex-1 sm:flex-none cursor-pointer"
            >
              <Settings className="mr-2 h-5 w-5" />
              Reconfigure
            </Button>
            <Link href="/create-call">
              <Button
                variant="destructive"
                className="flex-1 sm:flex-none cursor-pointer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Create Call
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="flex w-full justify-center">
        <div className="container">
          <DispatchTable />
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
