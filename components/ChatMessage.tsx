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
    <div className="flex items-start gap-4 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-zinc-900/80">
      <Image
        src={
          platform === "kick"
            ? "/platforms/kick2.png"
            : `/platforms/${platform}.png`
        }
        alt={platform}
        width={24}
        height={24}
        className="mt-1 select-none"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          {badgeIcon && (
            <span className="text-base">
              {badgeIcon}
            </span>
          )}

          <span
            className="text-[17px] font-extrabold tracking-tight"
            style={{ color: usernameColor }}
          >
            {username}
          </span>
        </div>

        <p className="mt-1 text-[17px] font-medium leading-7 text-zinc-100">
          {message}
        </p>
      </div>
    </div>
  );
}