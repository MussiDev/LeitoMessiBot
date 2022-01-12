module.exports = {
  name: "skip",
  alias: ["sk"],
  execute(message, args) {
    distube.skip(message);
  },
};
