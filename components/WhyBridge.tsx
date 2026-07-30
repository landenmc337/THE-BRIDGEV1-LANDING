export default function WhyBridge() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-5xl font-black">
            Stop Switching Between Chats
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            The Bridge combines every live chat into one clean,
            customizable overlay.
          </p>
        </div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Before */}
          <div className="rounded-3xl border border-red-500/20 bg-zinc-900 p-8">
            <h3 className="mb-8 text-2xl font-bold text-red-400">
              Without The Bridge
            </h3>

            <div className="space-y-4 text-zinc-300">
              <div>❌ Twitch Chat</div>
              <div>❌ Kick Chat</div>
              <div>❌ YouTube Chat</div>
              <div>❌ TikTok Chat</div>
              <div>❌ Multiple browser sources</div>
              <div>❌ Different moderation tools</div>
            </div>
          </div>

          {/* After */}
          <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8">
            <h3 className="mb-8 text-2xl font-bold text-cyan-400">
              With The Bridge
            </h3>

            <div className="space-y-4 text-zinc-300">
              <div>✅ One beautiful overlay</div>
              <div>✅ Every platform together</div>
              <div>✅ One moderation system</div>
              <div>✅ One settings page</div>
              <div>✅ OBS ready</div>
              <div>✅ Completely customizable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}