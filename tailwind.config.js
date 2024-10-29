module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("rippleui")],
  corePlugins: {
    preflight: false,    
  },
};