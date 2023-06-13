import { Copyright } from "../Components/Copyright";
import { EmptyMemories } from "../Components/EmptyMemories";
import { Hero } from "../Components/Hero";
import { SignIn } from "../Components/SignIn";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 ">
      <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        <SignIn />
        <Hero />
        <Copyright />
      </div>

      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  );
}
