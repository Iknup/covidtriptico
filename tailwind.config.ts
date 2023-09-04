import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: '#333333',
        backgroundNav: '#FFFFF0',
      },
      fontFamily: {
        NotoSans: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        Title: '#f2f2f2',
        Text: '#cccccc',
        ColumnLine: '#e5e5e5',
        LightBlue: '#9cc5d3',
      },
      animation: {
        fillScrollbar: 'fillScrollbar 2s ease-in-out forwards',
      },
      keyframes: {
        fillScrollbar: {
          '0%': { scrollbarColor: 'transparent transparent' },
          '100%': { scrollbarColor: '#cccccc' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
