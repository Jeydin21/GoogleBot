const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let supportEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Click [here](https://discord.gg/4a9pk8q) to join the support server!")
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
    .setTimestamp()
    message.channel.send(supportEmbed)
}

exports.help = {
  name: "support",
  description: "Gives an invite to the my support server, also my home!",
  usage: "support",
  category: "Important"
}

exports.aliases = ["server"]
