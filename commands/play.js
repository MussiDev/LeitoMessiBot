module.exports = {
  name: "play",
  alias: ["p"],
  execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      message.channel.send("Metete a un canal mostro");
    }
    const song = args.join(" ");
    if (!song) {
      message.channel.send("Escribí que queres escuchar la puta que te parió");
    } else {
      distube.play(message, args.join(" "));
    }
  },
};
