const { DuplicatesPlugin } = require("inspectpack/plugin");
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  plugins: [
    new DuplicatesPlugin({ verbose: false }),
    new StatsWriterPlugin({
      fields: ["assets", "modules"]
    })
  ]
};
