"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type FontName =
  | "Segoe UI (Chatterino)"
  | "Roboto"
  | "Rajdhani"
  | "JetBrains Mono"
  | "Orbitron"
  | "Exo 2"
  | "Teko"
  | "Bebas Neue"
  | "Impact"
  | "Comfortaa"
  | "Baloo 2"
  | "Fredoka"
  | "Quicksand"
  | "Dancing Script"
  | "Caveat"
  | "Pacifico"
  | "Indie Flower";

type OverlaySettings = {
  font: FontName;
  setFont: (font: FontName) => void;

  fontSize: number;
  setFontSize: (size: number) => void;

  bubbleColor: string;
  setBubbleColor: (color: string) => void;

  showBubble: boolean;
  setShowBubble: (value: boolean) => void;

  showPlatformIcons: boolean;
  setShowPlatformIcons: (value: boolean) => void;
};

const OverlaySettingsContext =
  createContext<OverlaySettings | null>(null);

export function OverlaySettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [font, setFont] =
    useState<FontName>("Segoe UI (Chatterino)");

  const [fontSize, setFontSize] = useState(30);

  const [bubbleColor, setBubbleColor] =
    useState("#27272A");

  const [showBubble, setShowBubble] =
    useState(true);

  const [showPlatformIcons, setShowPlatformIcons] =
    useState(true);

  return (
    <OverlaySettingsContext.Provider
      value={{
        font,
        setFont,

        fontSize,
        setFontSize,

        bubbleColor,
        setBubbleColor,

        showBubble,
        setShowBubble,

        showPlatformIcons,
        setShowPlatformIcons,
      }}
    >
      {children}
    </OverlaySettingsContext.Provider>
  );
}

export function useOverlaySettings() {
  const context = useContext(
    OverlaySettingsContext
  );

  if (!context) {
    throw new Error(
      "useOverlaySettings must be used inside OverlaySettingsProvider"
    );
  }

  return context;
}