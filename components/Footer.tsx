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

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#" className="transition hover:text-white">
            Download
          </a>

          <a href="#" className="transition hover:text-white">
            Discord
          </a>

          <a href="#" className="transition hover:text-white">
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