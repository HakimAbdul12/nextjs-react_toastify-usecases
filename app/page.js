import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex h-[700px]">
        <ul className="flex justify-center items-center gap-4 text-3xl">
          <li>
            <Link href="/client">Client</Link>
          </li>
          <li>
            <Link href="/server">Server</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
