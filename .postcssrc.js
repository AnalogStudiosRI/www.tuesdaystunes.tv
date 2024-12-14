module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
};
// export default {
//   plugins: [
//     (await import('tailwindcss')).default,
//     (await import('autoprefixer')).default
//   ]
// };
// import tailwind from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// export default {
//   plugins: [autoprefixer, tailwind]
// };

// import atImport from "postcss-import";
// import autoprefixer from "autoprefixer";
// import customProperties from "postcss-custom-properties";
// // const atImport = require("postcss-import");
// // const autoprefixer = require("autoprefixer");
// // const customProperties = require("postcss-custom-properties");

// module.exports = {
//   plugins: [atImport, autoprefixer, customProperties({ preserve: false })]
// };