const Discord = require("discord.js")
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const userSchema = require('../../models/user.js')


exports.run = async (client, message, args) => {


let giveIDs = ["667354950321569792", "262410813254402048"]
if (!giveIDs.includes(message.author.id)) return
message.channel.send("Temporarily disabled")
/*
  let user = message.mentions.members.first() || message.author
  userSchema.findOne({id: user.id}, (err, res) => {

  let path = ""
  let currency = ""
  if (args[1] === "wallet") {
    currency = "GoogleCoins"
    path = "money.wallet"
  }
  if (args[1] === "bank") {
     currency = "GoogleCoins"
     path = "money.bank"
  }
  if (args[1] === "fish") {
    currency = "Fish"
    path = "fish"
  }
  if (args[1] === "wheat") {
    currency = "Wheat"
    path = "wheat"
  }

  let nanEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(":x: That is not a number!")
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    if (isNaN(args[2])) return message.channel.send(nanEmbed)
    userSchema.updateOne({id: user.id}, {'money.wallet': res.money.wallet + amount, 'times.beg': Date.now()}, function(err, res) {if (err) console.log(err )})

    economy.add(`${args[1]}_${user.id}`, args[2])
    let bal = await economy.get(`${args[1]}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<a:checkmark:736406591275794583> Added ${args[2]} ${currency} to ${user}\n\nNew Balance: ${bal}`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    message.channel.send(moneyEmbed)

});
*/
};

exports.help = {
  name: "add",
  description: "Add a currency to a user's balance",
  usage: "add [@user] [currency] [# of currency to add]",
  category: "Administrator"
}

exports.aliases = []
