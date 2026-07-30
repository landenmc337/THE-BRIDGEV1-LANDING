import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Version */}
        <div className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-300">
          v0.1 Alpha
        </div>

        {/* Logo */}
        <Image
          src="/4k.png"
          alt="The Bridge Logo"
          width={170}
          height={170}
          priority
          className="mb-8 object-contain drop-shadow-2xl"
        />

        {/* Title */}
        <h1 className="text-6xl font-black tracking-tight md:text-7xl">
          The Bridge
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl font-semibold text-cyan-400 md:text-3xl">
          One Chat. Every Platform.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Merge Twitch, Kick, YouTube, TikTok, and more into one beautiful,
          customizable chat overlay built for creators.
        </p>

        {/* Email */}
        <div className="mt-10 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email for early access"
            className="h-14 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-5 text-white outline-none transition focus:border-cyan-400"
          />

          <button className="h-14 rounded-xl bg-cyan-400 px-8 font-bold text-black transition hover:bg-cyan-300">
            Get Early Access
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            disabled
            className="rounded-xl bg-zinc-800 px-6 py-3 font-semibold text-zinc-400 opacity-70"
          >
            Download Alpha (Coming Soon)
          </button>

          <a
            href="https://discord.gg/QpEXs7ejyy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition hover:border-cyan-400 hover:text-white"
          >
            Join Discord
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">
          <div>
            <p className="text-3xl font-black text-cyan-400">4+</p>
            <p className="mt-1 text-sm text-zinc-400">
              Supported Platforms
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-cyan-400">100%</p>
            <p className="mt-1 text-sm text-zinc-400">
              Customizable
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-cyan-400">Free</p>
            <p className="mt-1 text-sm text-zinc-400">
              Alpha Release
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}