import Image from "next/image";
import { Home } from "lucide-react";

import {
  SiDiscord,
  SiGithub,
  SiTwitch,
} from "react-icons/si";

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-zinc-800 bg-zinc-900">
      {/* Logo */}
      <div className="border-b border-zinc-800 p-6">
        <div className="flex items-center gap-3">
          <Image
            src="/4k.png"
            alt="The Bridge"
            width={48}
            height={48}
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              The Bridge
            </h1>

            <p className="text-sm text-zinc-500">
              Creator Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-black">
          <Home size={18} />
          Dashboard
        </button>
      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-4">
        <div className="rounded-xl bg-zinc-950 p-4">
          <p className="text-xs text-zinc-500">
            Signed in as
          </p>

          <p className="mt-1 font-semibold text-white">
            Deeno4k
          </p>

          <p className="mt-2 text-xs text-green-400">
            ● Alpha Tester
          </p>
        </div>

        <div className="mt-5 space-y-3">

          <a
            href="https://discord.gg/jMqhnrkgjT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-zinc-400 transition hover:text-white"
          >
            <SiDiscord size={18} />
            Discord
          </a>

          <a
            href="https://github.com/Landenmc337"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-zinc-400 transition hover:text-white"
          >
            <SiGithub size={18} />
            GitHub
          </a>

          <a
            href="https://twitch.tv/Deeno4k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-zinc-400 transition hover:text-white"
          >
            <SiTwitch size={18} />
            Twitch
          </a>

        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          The Bridge v0.1 Alpha
        </p>
      </div>
    </aside>
  );
}