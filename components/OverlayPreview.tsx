import Image from "next/image";
import ChatMessage from "./ChatMessage";
import { Palette, Layers3, Shield, Bell } from "lucide-react";

export default function OverlayPreview() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black">
            See The Bridge in Action
          </h2>

          <p className="mt-3 text-zinc-400">
            A preview of your live multi-platform chat overlay.
          </p>
        </div>

        {/* Glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-3xl" />

          {/* Window */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="font-semibold text-zinc-300">
                The Bridge
              </div>

              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                ● 4 Platforms Connected
              </div>
            </div>

            {/* App Layout */}
            <div className="grid md:grid-cols-[260px_1fr]">
              {/* Sidebar */}
              <div className="border-r border-zinc-800 bg-zinc-900 p-6">
                <div className="mb-8 flex items-center gap-3">
                  <Image
                    src="/4k.png"
                    alt="The Bridge"
                    width={42}
                    height={42}
                    className="rounded-lg"
                  />
<div className="mt-auto pt-8">
  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3">
    <p className="text-xs text-emerald-400">
      ● Connected to Chat Bridge
    </p>
  </div>
</div>
                  <div>
                    <h4 className="font-bold text-white">
                      The Bridge
                    </h4>

                    <p className="text-xs text-zinc-500">
                      v0.1 Alpha
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="flex w-full items-center gap-3 rounded-lg bg-cyan-500/20 px-4 py-3 font-medium text-cyan-300">
                    <Palette size={18} />
                    Appearance
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-zinc-400 transition hover:bg-zinc-800">
                    <Layers3 size={18} />
                    Platforms
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-zinc-400 transition hover:bg-zinc-800">
                    <Shield size={18} />
                    Moderation
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-zinc-400 transition hover:bg-zinc-800">
                    <Bell size={18} />
                    Alerts
                  </button>
                </div>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Session
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-white">4</p>
                      <p className="text-sm text-zinc-500">
                        Connected Platforms
                     <div className="grid grid-cols-2 gap-4">
  <div className="flex items-center gap-2">
    <Image src="/platforms/twitch.png" alt="Twitch" width={18} height={18} />
    <span>Twitch</span>
  </div>

  <div className="flex items-center gap-2">
    <Image src="/platforms/kick2.png" alt="Kick" width={18} height={18} />
    <span>Kick</span>
  </div>

  <div className="flex items-center gap-2">
    <Image src="/platforms/youtube.png" alt="YouTube" width={18} height={18} />
    <span>YouTube</span>
  </div>

  <div className="flex items-center gap-2">
    <Image src="/platforms/tiktok.png" alt="TikTok" width={18} height={18} />
    <span>TikTok</span>
  </div>
</div>
                        Filters Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Preview */}
              <div className="h-[700px] overflow-y-auto bg-zinc-950 p-8">
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    <div className="mb-6 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-3">
  <span className="text-sm text-zinc-400">
    Overlay Preview
  </span>

  <span className="rounded bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
    Connected
  </span>
</div>
                    Live Chat
                  </h3>

                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                    ● LIVE
                  </span>
                </div>

                <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                  <div className="mb-3 text-sm font-semibold text-zinc-300">
                    Connected Platforms
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-500" />
                      Twitch
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-lime-400" />
                      Kick
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      YouTube
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      TikTok
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <ChatMessage
                    platform="twitch"
                    username="is2511"
                    usernameColor="#A970FF"
                    message="Welcome to The Bridge! 👋"
                  />

                  <ChatMessage
                    platform="kick"
                    username="4kpops"
                    usernameColor="#53FC18"
                    message="Follow deeno4k on Twitch! 🔥"
                  />

                  <ChatMessage
                    platform="youtube"
                    username="toneyadig"
                    usernameColor="#FF4D4D"
                    message="Check out the 2P merch"
                  />

                  <ChatMessage
                    platform="tiktok"
                    username="solidfiendd"
                    usernameColor="#00F2EA"
                    message="We went to Thailand and saw ladyboys 😂"
                  />

                  <ChatMessage
                    platform="twitch"
                    username="deeno4kgf"
                    usernameColor="#BF94FF"
                    message="Love how every platform is in one place"
                  />

                  <ChatMessage
                    platform="youtube"
                    username="Viktordeath"
                    usernameColor="#FF6B6B"
                    message="BRB guys, I'll be in cyberspace"
                  />

                  <ChatMessage
                    platform="kick"
                    username="thephonzz"
                    usernameColor="#53FC18"
                    message="4K is the only way"
                  />

                  <ChatMessage
                    platform="tiktok"
                    username="roseluvsyou98"
                    usernameColor="#00F2EA"
                    message="Finally no more switching between chats!"
                  />

                  <ChatMessage
                    platform="twitch"
                    username="speedyyyyyboi"
                    usernameColor="#A970FF"
                    message="Deeno is a legend for this,Can't wait to use it"
                  />

                  <ChatMessage
                    platform="youtube"
                    username="4k_gang_vibz"
                    usernameColor="#FF4D4D"
                    message="This is exactly what the streaming community needed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}