module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          omnesarabic: ['OmnesArabic', 'sans-serif'],
        },
        colors: {
          primary: '#B82D97', // Ensure the color is added under 'colors'
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to right, #B82D97, #57B3D3, #76ABFC)',
        },
      },
    },
    plugins: [],
  };
  