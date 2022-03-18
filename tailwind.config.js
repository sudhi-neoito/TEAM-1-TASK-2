module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "card-gradient": "linear-gradient(190.77deg, #54B7CE 0.72%, #5457F4 98.6%)",
        "cube-gradient": "linear-gradient(124.4deg, #0070F0 10.8%, #92C5FF 87.34%)",
        "normal-gradient": "linear-gradient(180deg, #F5F5F5 0%, rgba(245, 245, 245, 0) 100%)",
      },
    },
  },
  plugins: [],
};
