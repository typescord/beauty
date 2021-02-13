const yaml = require("js-yaml");
const fs = require("fs");

module.exports = {
  configs: {
    package: yaml.load(
      fs.readFileSync(require.resolve('./package.yml'), "utf8")
    ),
  },
};
