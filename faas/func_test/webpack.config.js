module.exports = {
  output: {
    path: __dirname,
    filename: "index.js",
    library: "exports.main",
    libraryTarget: "assign",
    libraryExport: "default"
  },
  target: "node"
};
