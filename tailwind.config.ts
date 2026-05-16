import type {Config} from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: "#094cb2",
                background: "#faf9fa",
                surface: "#faf9fa",

                "on-surface": "#1b1c1d",
                "on-primary": "#ffffff",

                secondary: "#5a5f63",

                "surface-container-low": "#f5f3f4",
                "surface-container-lowest": "#ffffff",
                "surface-container": "#efedee",
                "surface-container-high": "#e9e8e9",

                "surface-bright": "#faf9fa",

                "surface-variant": "#e3e2e3",

                outline: "#737784",
                "outline-variant": "#c3c6d5",

                "primary-container": "#3366cc",
                "secondary-container": "#dfe3e8",

                error: "#ba1a1a",
            },

            spacing: {
                xs: "4px",
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "32px",
                gutter: "16px",
                "container-max": "1280px",
            },

            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },

            fontFamily: {
                h1: ["Inter"],
                h2: ["Inter"],
                h3: ["Inter"],
                "body-md": ["Inter"],
                "body-lg": ["Inter"],
                "data-mono": ["Inter"],
            },

            fontSize: {
                h1: [
                    "32px",
                    {
                        lineHeight: "1.2",
                        fontWeight: "700",
                    },
                ],

                h2: [
                    "24px",
                    {
                        lineHeight: "1.3",
                        fontWeight: "600",
                    },
                ],

                h3: [
                    "20px",
                    {
                        lineHeight: "1.4",
                        fontWeight: "600",
                    },
                ],

                "body-md": [
                    "16px",
                    {
                        lineHeight: "1.5",
                    },
                ],

                "body-lg": [
                    "16px",
                    {
                        lineHeight: "1.6",
                    },
                ],
            },
        },
    },

    plugins: [],
} satisfies Config;
