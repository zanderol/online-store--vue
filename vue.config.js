// const globalSassFiles = [
//   "./src/assets/styles/variables.scss",
//   "./src/assets/styles/styles.scss",
// ];

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/online-store--vue/" : "/",
  // chainWebpack: (config) => {
  //   const oneOfsMap = config.module.rule("scss").oneOfs.store;
  //   oneOfsMap.forEach((item) => {
  //     item
  //       .use("sass-resources-loader")
  //       .loader("sass-resources-loader")
  //       .options({
  //         resources: globalSassFiles,
  //       })
  //       .end();
  //   });
  // },
};

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         // prependData: `@import "@/assets/styles/styles.scss";`,
//         additionalData: `@import "@/assets/styles/styles.scss";`,
//         // webpackImporter: `@import "@/assets/styles/styles.scss";`,
//       },
//       // scss: {
//       // prependData: `@import "@/assets/styles/styles.scss";`,
//       // additionalData: `@import "@/assets/styles/styles.scss";`,},
//     },
//   },
// };
