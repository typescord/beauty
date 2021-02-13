const yaml = require("js-yaml");
const fs = require("fs");

module.exports = yaml.load(
  fs.readFileSync(require.resolve("./eslintrc.yml"), "utf8")
);
