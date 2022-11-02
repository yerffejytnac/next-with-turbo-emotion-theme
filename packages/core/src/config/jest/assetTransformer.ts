const path = require("path");

export const assetTransformer = {
  process(filename: any) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  },
};
