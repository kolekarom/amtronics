/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#1E40AF',
          hover: '#1E40AF',
          light: '#3B82F6',
        },
        // Background Colors
        background: {
          DEFAULT: '#0F172A',
          dark: '#0F172A',
          light: '#1E293B',
        },
        // Accent Colors
        accent: {
          blue: '#38BDF8',
          orange: '#F59E0B',
        },
        // Text Colors
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
        // Status Colors
        success: {
          DEFAULT: '#25D366',
          hover: '#22C35E',
        },
        // Utility Colors
        border: 'rgba(255, 255, 255, 0.1)',
        card: '#1E293B',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-hover': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
      },
      animation: {
        'gradient-shift': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
