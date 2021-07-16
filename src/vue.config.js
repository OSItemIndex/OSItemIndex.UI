// eslint-disable-next-line @typescript-eslint/no-var-requires
const transformer = require("ts-reflection/transformer").default;

module.exports = {
  chainWebpack: (config) => {
    const getCustomTransformers = (program) => ({
      before: [transformer(program)],
    });

    const transpileOnly = false;
    ["ts", "tsx"].forEach((rule) => {
      config.module
        .rule(rule)
        .use("ts-loader")
        .loader("ts-loader")
        .tap((options) =>
          Object.assign(options, {
            getCustomTransformers,
            transpileOnly,
          })
        );
    });
  },
};
