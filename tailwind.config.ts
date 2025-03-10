import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
	  colors: {
		main: 'var(--main)',
		overlay: 'var(--overlay)',
		bg: 'var(--bg)',
		bw: 'var(--bw)',
		blank: 'var(--blank)',
		text: 'var(--text)',
		mtext: 'var(--mtext)',
		border: 'var(--border)',
		ring: 'var(--ring)',
		ringOffset: 'var(--ring-offset)',
		gray: 'var(--gray)',
		yellow: 'var(--yellow)',
		transparent: 'var(--transparent)',
		black2: 'var(--black2)',

		secondaryBlack: '#212121', 
	  },
	  borderRadius: {
		base: '5px'
	  },
	  boxShadow: {
		shadow: 'var(--shadow)'
	  },
	  translate: {
		boxShadowX: '4px',
		boxShadowY: '4px',
		reverseBoxShadowX: '-4px',
		reverseBoxShadowY: '-4px',
	  },
	  fontWeight: {
		base: '400',
		heading: '900',
	  },
	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
