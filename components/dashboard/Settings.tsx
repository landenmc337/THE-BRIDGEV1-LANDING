"use client";

import { useOverlaySettings } from "@/context/OverlaySettingsContext";
import type { FontName } from "@/context/OverlaySettingsContext";

const fonts: FontName[] = [
  "Segoe UI (Chatterino)",
  "Roboto",
  "Rajdhani",
  "JetBrains Mono",
  "Orbitron",
  "Exo 2",
  "Teko",
  "Bebas Neue",
  "Impact",
  "Comfortaa",
  "Baloo 2",
  "Fredoka",
  "Quicksand",
  "Dancing Script",
  "Caveat",
  "Pacifico",
  "Indie Flower",
];

export default function Settings() {
  const {
    font,
    setFont,
    fontSize,
    setFontSize,
    bubbleColor,
    setBubbleColor,
    showBubble,
    setShowBubble,
  } = useOverlaySettings();

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold text-white">
        Appearance
      </h2>

      <p className="mt-2 text-sm text-zinc-500">
        Customize how your overlay appears.
      </p>

      <div className="mt-8 space-y-8">

        {/* Font */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-zinc-400">
            Font
          </label>

          <select
            value={font}
            onChange={(e) =>
              setFont(e.target.value as FontName)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none transition focus:border-cyan-400"
          >
            {fonts.map((fontName) => (
              <option key={fontName}>
                {fontName}
              </option>
            ))}
          </select>
        </div>

        {/* Font Size */}
        <div>
          <div className="mb-3 flex justify-between">
            <span className="text-sm font-semibold text-zinc-400">
              Font Size
            </span>

            <span className="font-semibold text-cyan-400">
              {fontSize}px
            </span>
          </div>

          <input
            type="range"
            min="18"
            max="48"
            value={fontSize}
            onChange={(e) =>
              setFontSize(Number(e.target.value))
            }
            className="w-full accent-cyan-400"
          />
        </div>

        {/* Bubble */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-zinc-400">
            Show Bubble
          </span>

          <button
            type="button"
            onClick={() => setShowBubble(!showBubble)}
            className={`relative h-7 w-12 rounded-full transition ${
              showBubble
                ? "bg-cyan-400"
                : "bg-zinc-700"
            }`}
          >
            <div
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                showBubble
                  ? "left-6"
                  : "left-1"
              }`}
            />
          </button>
        </div>

        {/* Bubble Color */}
        {showBubble && (
          <div>
            <label className="mb-3 block text-sm font-semibold text-zinc-400">
              Bubble Color
            </label>

            <input
              type="color"
              value={bubbleColor}
              onChange={(e) =>
                setBubbleColor(e.target.value)
              }
              className="h-12 w-full cursor-pointer rounded-xl border border-zinc-700 bg-zinc-950"
            />
          </div>
        )}

      </div>
    </div>
  );
}