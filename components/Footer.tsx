import { Download, MessageCircle, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-lg font-bold text-white">
            The Bridge
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            One Chat. Every Platform.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-600">
            <Download size={16} />
            Download
          </span>

          <a
            href="https://discord.gg/QpEXs7ejyy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.2)]"
          >
            <MessageCircle size={16} />
            Discord
          </a>

          <a
            href="https://github.com/landenmc337/THE-BRIDGEV1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.2)]"
          >
            <Code2 size={16} />
            GitHub
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} The Bridge • Built by Dnx4k
        </p>
      </div>
    </footer>
  );
}