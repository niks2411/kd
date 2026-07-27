import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        klein: "#002FA7",
        signal: "#E53E3E",
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#525252",
        },
        paper: "#F9FAFB",
        line: "#E5E7EB",
      },
    },
  },
  plugins: [],
};

export default config;
