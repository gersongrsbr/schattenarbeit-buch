module.exports = {
  content: [require('path').join(__dirname, '../index.html')],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#002718', dark: '#00160B', mid: '#0B4A30' },
        sand: { DEFAULT: '#F2F7F5', deep: '#DFEBE6' },
        secondary: '#E7F1ED', accent: '#DAE9E2',
        fg: '#141414', muted: '#4B5953', line: '#D8E0DD',
        cta: { DEFAULT: '#00922D', hover: '#007B20' },
        warning: '#E8AB3E'
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};
