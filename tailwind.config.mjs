import typography from "@tailwindcss/typography";
import { hover } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1e4f8a",
					hover: "#16396b",
				},
				accent: {
					DEFAULT: "#f57c00",
					hover: "#c46200",
				},
				green: {
					DEFAULT: "#7ed321",
					hover: "#62a419",
				},
				pink: {
					DEFAULT: "#e91e63",
					hover: "#b9154d",
				},
				"blue-light": {
					DEFAULT: "#29b6f6",
				},
				"gray-dark": "#333333",
				"gray-light": "#F5F5F5",
			},
		},
	},
	plugins: [typography],
};
