"use client";

import ChatOverlay from "./ChatOverlay";

export default function Preview() {
  return (
    <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Live Overlay Preview
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            This is exactly how your overlay will appear on stream.
          </p>
        </div>

        <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
          ● Live
        </div>
      </div>

      <div
        className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-zinc-800"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #161616 25%, transparent 25%),
            linear-gradient(-45deg, #161616 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #161616 75%),
            linear-gradient(-45deg, transparent 75%, #161616 75%)
          `,
          backgroundSize: "32px 32px",
          backgroundPosition:
            "0 0, 0 16px, 16px -16px, -16px 0",
        }}
      >
        <ChatOverlay />
      </div>
    </div>
  );
}