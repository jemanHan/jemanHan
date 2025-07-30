// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ 이거 중요
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
