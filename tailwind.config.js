/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      main: "SfReg",
      light: "SfLight",
      bold: "SfBold",
      medium: "SfMedium",
      semi: "SfSemi",
    },
    colors: {
      black: "#000",
      mainBg: "#1A1A1A",
      accentBlue: "#007AFF",
      lightBlue: "#0098EB",
      white: "#fff",
      textWhite: "#FCFCFC",
      grayLine: "#3C3C435C",
      paleGray: "#9F9F9F",
    },
    borderRadius: {
      md: "10px",
      round: "50%",
    },
    fontSize: {
      md: "21px",
      normal: "16px",
      normalPlus: "17px",
      normalMinus: "15px",
      smPlus: "13px",
    },
  },
  plugins: [],
};
