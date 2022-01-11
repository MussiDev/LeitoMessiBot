module.exports = {
  name: "mevoyacomer",
  alias: ["mvac"],
  execute(message, args) {
    message.channel.send(`Provecho ${message.author} `);
  },
};
