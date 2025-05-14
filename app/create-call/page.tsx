import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CreateCallForm from "@/components/create-call/create-call-form";

export default function CreateCallPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex justify-center flex-1">
        <div className="flex-1 container py-8">
          <CreateCallForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
