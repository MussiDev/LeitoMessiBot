module.exports = {
  name: "eliminar",
  alias: ["e"],
  execute(message, args) {
    if (!message.guild.me.permissionsIn(message.channel).has("MANAGE_MESSAGES"))
      return message.channel.send("Pero no tienes permisos hermano");

    if (!message.member.permissionsIn(message.channel).has("MANAGE_MESSAGES"))
      return message.channel.send("Pero no tienes permisos hermano");

    let cantidad = parseInt(args[0]);

    if (!cantidad || isNaN(cantidad))
      return message.channel.send(
        "Te pensas que soy adivino? Escribí el comando y después un numero por favor"
      );

    if (cantidad > 100) {
      message.channel.send(
        "El maximo de mensajes que puedo borrar es 100 pelotudo"
      );
      cantidad = 100;
    }

    message.channel.messages.fetch({ limit: cantidad }).then((mensajes) => {
      message.channel
        .bulkDelete(mensajes.filter((m) => !m.pinned))
        .then(() => {
          message.channel.send(
            `Listo, borre los ${cantidad} mensajes :ok_hand:, de nada`
          );
        })
        .catch((e) => {
          message.channel.send("No quiero borrar jeee");
        });
    });
  },
};
