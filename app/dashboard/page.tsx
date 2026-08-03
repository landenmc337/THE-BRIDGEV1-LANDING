"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import Preview from "@/components/dashboard/Preview";
import Settings from "@/components/dashboard/Settings";

import { OverlaySettingsProvider } from "@/context/OverlaySettingsContext";

export default function Dashboard() {
  return (
    <OverlaySettingsProvider>
      <main className="flex min-h-screen bg-zinc-950 text-white">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header />

          <div className="flex flex-1 gap-6 p-6">

            {/* Left Side */}
            <div className="w-[380px] space-y-6">

              {/* Appearance */}
              <Settings />

              {/* Connected Platforms */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <h2 className="text-2xl font-bold text-white">
                  Connected Platforms
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Connect your streaming platforms.
                </p>

                <div className="mt-8 space-y-5">

                  <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <div>
                      <p className="font-semibold">
                        Twitch
                      </p>

                      <p className="text-sm text-zinc-500">
                        Connected
                      </p>
                    </div>

                    <span className="text-green-400 text-xl">
                      ●
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <div>
                      <p className="font-semibold">
                        Kick
                      </p>

                      <p className="text-sm text-zinc-500">
                        Coming Soon
                      </p>
                    </div>

                    <span className="text-yellow-400 text-xl">
                      ●
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <div>
                      <p className="font-semibold">
                        YouTube
                      </p>

                      <p className="text-sm text-zinc-500">
                        Coming Soon
                      </p>
                    </div>

                    <span className="text-yellow-400 text-xl">
                      ●
                    </span>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Side */}
            <div className="flex flex-1 flex-col gap-6">
              
              {/* Preview */}
              <div className="flex-1">
                <Preview />
              </div>

            </div>

          </div>
        </div>
      </main>
    </OverlaySettingsProvider>
  );
}