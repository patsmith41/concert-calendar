import ConcertGrid from "@/components/shows/ConcertGrid";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto">
        <h1 className="text-2xl font-bold mb-8">Concert Calendar</h1>
        <ConcertGrid />
      </main>
    </div>
  );
}