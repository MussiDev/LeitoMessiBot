module.exports = {
  name: "queue",
  alias: ["q"],
  execute(message, args) {
    const queue = distube.getQueue(message);
    if (!queue) {
      message.channel.send("Reproduciendo ahora!");
    } else {
      message.channel.send(
        `En cola:\n${queue.songs
          .map(
            (song, id) =>
              `**${id ? id : "Reproduciendo ahora"}**. ${song.name} - \`${
                song.formattedDuration
              }\``
          )
          .slice(0, 10)
          .join("\n")}`
      );
    }
  },
};
