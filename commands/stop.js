module.exports = {
  name: "stop",
  alias: ["s"],
  execute(message, args) {
    distube.stop(message);
    message.channel.send("Ahi le pegué un cachetazo");
  },
};
