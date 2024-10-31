// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Đảm bảo đường dẫn chính xác đến các file của bạn
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // small devices (phones, 640px and up)
      md: "768px", // medium devices (tablets, 768px and up)
      lg: "1024px", // large devices (desktops, 1024px and up)
      xl: "1280px", // extra large devices (large desktops, 1280px and up)
      "2xl": "1536px", // 2x extra large devices (larger desktops, 1536px and up)
    },
  },
  plugins: [],
};
