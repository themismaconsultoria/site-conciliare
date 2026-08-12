module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        navy: '#051024',
        gold: '#D4AF37',
        goldHover: '#B5952F',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/img/hero-bg.jpg')",
        'dots': "radial-gradient(#D4AF37 1px, transparent 1px)"
      }
    }
  },
  plugins: [],
}
