module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        omnesarabic: ["OmnesArabic", "sans-serif"],
      },
      textColor: {
        primary: "#B82D97",
        secondary: "#525252",
        gray800: "#0D062D",
        // Ensure the color is added under 'colors'
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #B82D97, #57B3D3, #76ABFC)",
      },
      backgroundColor: {
        footerprimary: "#F9F9F9", // Replace with your desired color code
      },
    },
  },
  plugins: [],
};
