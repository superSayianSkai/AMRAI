import plugin from "tailwindcss/plugin";

export const addUtilities = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".horizontal-scroll-container::-webkit-scrollbar": {
      display: "none",
    },
    ".horizontal-scroll": {
      display: "flex",
      transition: "transform 0.3s ease-in-out",
      scrollBehavior: "smooth",
    },
  };

  addUtilities(newUtilities, ["responsive", "hover"]);
});
