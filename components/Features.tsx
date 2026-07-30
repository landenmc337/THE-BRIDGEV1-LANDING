import {
  Monitor,
  Palette,
  Layers,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "One Overlay",
    description:
      "Combine chats from every streaming platform into one beautiful overlay.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Fonts, colors, shadows, spacing, badges, emotes, animations, and more.",
  },
  {
    icon: Layers,
    title: "Multi Platform",
    description:
      "Connect Twitch, Kick, YouTube, TikTok, and future platforms in one place.",
  },
  {
    icon: Shield,
    title: "Built-in Moderation",
    description:
      "Filter spam, blocked words, duplicate messages, and unwanted users.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "Designed specifically for creators with a clean, premium interface.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Low latency desktop app built for live streaming performance.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-5xl font-black">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Built from the ground up for modern creators.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-500 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex rounded-xl bg-cyan-500/15 p-3">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}