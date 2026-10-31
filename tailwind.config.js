/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#002718', // Verde bosque oscuro Atlas
          dark: '#00160B',    // Footer oscuro
          light: '#0A3D27',
          accent: '#0ba34a',
        },
        sand: {
          DEFAULT: '#F2F7F5', // Superficie clara alternativa
          deep: '#DFEBE6',
        },
        cta: {
          DEFAULT: '#00922D', // Verde éxito saturado para compra
          hover: '#007B20',
        },
        gold: '#E8AB3E',
        fg: '#141414',
        'muted-fg': '#4B5953',
        line: '#D8E0DD',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -6px rgba(99, 42, 11, 0.14)',
        card: '0 10px 34px -14px rgba(99, 42, 11, 0.22)',
        cta: '0 14px 26px -10px rgba(0, 146, 45, 0.50), 0 6px 14px -6px rgba(0, 146, 45, 0.40)',
      }
    }
  },
  plugins: [],
}
