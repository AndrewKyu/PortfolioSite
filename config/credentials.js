if (process.env.NODE_ENV) {
  module.exports = require("./credentials_prod");
} else {
  module.exports = require("./credentials_dev");
}
