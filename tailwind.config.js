/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        parisienne: ['"Parisienne"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        rose: {
          50: '#fff5f8',
          100: '#ffe4ee',
          200: '#ffc9dd',
          300: '#ff9fbf',
          400: '#ff6f9c',
          500: '#ff4f86',
          600: '#e63470',
          700: '#c01f56',
          800: '#8f1740',
          900: '#5a0e29',
        },
        lavender: {
          50: '#f7f3ff',
          100: '#ece0ff',
          200: '#d9c2ff',
          300: '#c19fff',
          400: '#a379f5',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#4c1d95',
          900: '#2e1065',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#f9e8a3',
          300: '#f5d061',
          400: '#e8b923',
          500: '#c99a18',
          600: '#a87d12',
          700: '#85600f',
          800: '#5c420b',
          900: '#3d2c08',
        },
        ink: {
          900: '#1a0b1f',
          800: '#241030',
          700: '#2f163d',
          600: '#3b1d4c',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,111,156,0.45)',
        'glow-gold': '0 0 40px rgba(245,208,97,0.4)',
        'glow-lav': '0 0 40px rgba(163,121,245,0.4)',
        glass: '0 8px 32px rgba(0,0,0,0.37)',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.18)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.12)' },
          '60%': { transform: 'scale(1)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 2.2s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
