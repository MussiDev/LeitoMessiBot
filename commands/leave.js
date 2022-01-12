module.exports = {
  name: "leave",
  alias: ["l"],
  execute(message, args) {
    distube.voices.get(message)?.leave();
  },
};
