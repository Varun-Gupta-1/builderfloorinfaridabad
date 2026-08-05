/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        accent: '#2563eb',
        surface: '#f8fafc'
      },
      boxShadow: {
        soft: '0 24px 60px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

module.exports = config;
