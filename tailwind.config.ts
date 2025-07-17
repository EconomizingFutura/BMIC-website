import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can extend default theme here
      colors: {
        primary: "#1e40af",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};

export default config;
