export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-8 py-6">
      <div>
        <h1 className="text-3xl font-black text-white">
          Welcome in! 👋
        </h1>

        <p className="mt-1 text-zinc-500">
          Customize your overlay and connect your platforms.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Overlay URL
          </p>

          <p className="font-mono text-sm text-cyan-400">
            overlay.thebridge.chat/deeno4k
          </p>
        </div>

        <button className="rounded-xl bg-cyan-400 px-4 py-2 font-semibold text-black transition hover:bg-cyan-300">
          Copy
        </button>
      </div>
    </header>
  );
}