const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "veja o ping do bot.",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        let ping = client.ws.ping;

        let embed_1 = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dymianc: true })})
        .setDescription(`Olá ${interaction.user}, meu ping está em \`calculando...\`.`)
        .setColor("Random");

        let embed_2 = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dymianc: true })})
        .setDescription(`Olá ${interaction.user}, meu ping está em \`${ping}\`.`)
        .setColor("Random");

    interaction.replay({ embeds: [embed_1] }).than( () => {
        setTimeout( () => {
           interaction.editReplay({embeds: [embed_2] }) 
        }, 2000)
        
    })
    }
}