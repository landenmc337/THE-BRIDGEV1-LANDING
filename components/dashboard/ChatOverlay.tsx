"use client";

import { useOverlaySettings } from "@/context/OverlaySettingsContext";
import { FONT_MAP } from "@/lib/fonts";

import {
  SiTwitch,
  SiYoutube,
  SiKick,
} from "react-icons/si";

const TEXT_STYLE = {
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  textShadow: `
    -2px 0 0 #000,
     2px 0 0 #000,
     0 -2px 0 #000,
     0 2px 0 #000,

    -2px -2px 0 #000,
     2px -2px 0 #000,
    -2px 2px 0 #000,
     2px 2px 0 #000,

    -1px 0 0 #000,
     1px 0 0 #000,
     0 -1px 0 #000,
     0 1px 0 #000,

    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000,

     0 3px 10px rgba(0,0,0,.95)
  `,
};

export default function ChatOverlay() {
  const {
    font,
    fontSize,
    bubbleColor,
    showBubble,
    showPlatformIcons,
  } = useOverlaySettings();

  const messages = [
    {
      platform: "twitch",
      username: "Deeno4k",
      color: "#9146FF",
      text: "Welcome to The Bridge 👋",
    },
    {
      platform: "youtube",
      username: "4kpops",
      color: "#FF0000",
      text: "4kpops is here",
    },
    {
      platform: "kick",
      username: "acc1d__",
      color: "#53FC18",
      text: "beats steady knockin",
    },
    {
      platform: "twitch",
      username: "thephonzz",
      color: "#00C8FF",
      text: "and thats the bottom line",
    },
    {
      platform: "twitch",
      username: "blucollardre",
      color: "#00D084",
      text: "Yoooo 🔥",
    },
    {
      platform: "youtube",
      username: "javycreates",
      color: "#FF6B6B",
      text: "i was at work but im here now!",
    },
    {
      platform: "kick",
      username: "speedyyyyyboi",
      color: "#7CFC00",
      text: "**redeemed hydrate**",
    },
    {
      platform: "twitch",
      username: "4k_gang_vibz",
      color: "#F9A826",
      text: "we out here",
    },
    {
      platform: "youtube",
      username: "toneyadig",
      color: "#00BFFF",
      text: "4k x 2P ",
    },
    {
      platform: "kick",
      username: "viktordeath",
      color: "#C77DFF",
      text: "where is the balenciaga hoodie",
    },
  {
  platform: "twitch",
  username: "slappinthegame",
  color: "#FF9F1C",
  text: "dont rap just stream bruh",
},
  ];

  

  const selectedFont = FONT_MAP[font];
  const fontClass = selectedFont?.className ?? "";

  const fontFamily =
    font === "Segoe UI (Chatterino)"
      ? '"Segoe UI", sans-serif'
      : font === "Impact"
      ? "Impact, sans-serif"
      : undefined;

  return (
    <div
      className="absolute bottom-8 left-8 space-y-5"
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {messages.map((message) => (
        <div
          key={`${message.platform}-${message.username}`}
          className={
            showBubble
              ? "rounded-3xl px-5 py-3 shadow-xl"
              : ""
          }
          style={
            showBubble
              ? {
                  backgroundColor: bubbleColor,
                }
              : undefined
          }
        >
          <div className="flex items-center gap-2.5">
            {showPlatformIcons && (
              <>
                {message.platform === "twitch" && (
                  <SiTwitch
                    size={22}
                    color="#9146FF"
                    className="shrink-0"
                  />
                )}

                {message.platform === "youtube" && (
                  <SiYoutube
                    size={22}
                    color="#FF0000"
                    className="shrink-0"
                  />
                )}

                {message.platform === "kick" && (
                  <SiKick
                    size={22}
                    color="#53FC18"
                    className="shrink-0"
                  />
                )}
              </>
            )}

            <span
              className={fontClass}
              style={{
                ...TEXT_STYLE,
                color: message.color,
                fontWeight: 900,
                fontFamily,
              }}
            >
              {message.username}:
            </span>

            <span
              className={`text-white ${fontClass}`}
              style={{
                ...TEXT_STYLE,
                fontWeight: 800,
                fontFamily,
              }}
            >
              {message.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}