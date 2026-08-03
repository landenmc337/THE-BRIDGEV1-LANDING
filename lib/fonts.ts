import type { FontName } from "@/context/OverlaySettingsContext";

import {
  Rajdhani,
  Bebas_Neue,
  Roboto,
  JetBrains_Mono,
  Orbitron,
  Exo_2,
  Teko,
  Comfortaa,
  Baloo_2,
  Fredoka,
  Quicksand,
  Dancing_Script,
  Caveat,
  Pacifico,
  Indie_Flower,
} from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

export const FONT_MAP: Record<
  FontName,
  { className: string } | null
> = {
  "Segoe UI (Chatterino)": null,
  Roboto: roboto,
  Rajdhani: rajdhani,
  "JetBrains Mono": jetbrainsMono,
  Orbitron: orbitron,
  "Exo 2": exo2,
  Teko: teko,
  "Bebas Neue": bebas,
  Impact: null,
  Comfortaa: comfortaa,
  "Baloo 2": baloo,
  Fredoka: fredoka,
  Quicksand: quicksand,
  "Dancing Script": dancingScript,
  Caveat: caveat,
  Pacifico: pacifico,
  "Indie Flower": indieFlower,
};