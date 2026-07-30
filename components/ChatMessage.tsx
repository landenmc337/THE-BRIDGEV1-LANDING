import Image from "next/image";

type ChatMessageProps = {
  platform: "twitch" | "kick" | "youtube" | "tiktok";
  username: string;
  usernameColor: string;
  message: string;
  badge?: "mod" | "vip" | "sub" | "verified";
};

export default function ChatMessage({
  platform,
  username,
  usernameColor,
  message,
  badge,
}: ChatMessageProps) {
  const badgeIcons = {
  mod: "🛡️",
  vip: "💎",
  sub: "⭐",
  verified: "✔️",
} as const;

const badgeIcon = badge ? badgeIcons[badge] : null;
  return (
    <div className="flex items-start gap-3 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-zinc-900">
      <Image
        src={
          platform === "kick"
            ? "/platforms/kick2.png"
            : `/platforms/${platform}.png`
        }
        alt={platform}
        width={22}
        height={22}
        className="mt-1"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          {badgeIcon && (
            <span className="text-sm">
              {badgeIcon}
            </span>
          )}

          <span
            className="font-bold"
            style={{ color: usernameColor }}
          >
            {username}
          </span>
        </div>

        <p className="mt-1 leading-relaxed text-white">
          {message}
        </p>
      </div>
    </div>
  );
}