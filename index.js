const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NTIxNjkyNjEzOTAxMDI1Mjg2.DxaKIw.EnpnVZqyaOd52L8kJL6Ku1tlYp8');


bot.on('ready', () => {
    bot.user.setActivity('Cyberpunk 2077');
    console.log('logado');
});

bot.on('message', message => {

    if(message.content.startsWith('!Ping')){
        message.channel.send('Pong!');
    }

    if(message.content.startsWith('!Pudim')){
        message.channel.send('À espera de uma waifu');
    }

    if(message.content.startsWith('!Hoffmano')){
        message.channel.send('3.14159265359 vezes ele mesmo é a própria gravidade da Terra');
    }

    if(message.content.startsWith('!Bouças')){
        message.channel.send('Mochilas!');
    }

    if(message.content.startsWith('!Bruno')){
        message.channel.send('Ele gosta de brincar com fogo ;-;');
    }

    if(message.content.startsWith('!Pedro')){
        message.channel.send('Cap.Diabetes!');
    }

    if(message.content.startsWith('!Gramkow')){
        message.channel.send('Paz e Coca, Grande Vaca, Negão da Família e Cara da Etiópia');
    }

    if(message.content.startsWith('!Gustavo')){
        message.channel.send('Ainda nem ralou no RPG');
    }

    if(message.content.startsWith('!João')){
        message.channel.send('Pé de Feijão');
    }

    if(message.content.startsWith('!Poddis')){
        message.channel.send('Poddis ser');
    }

    if(message.content.startsWith('!Xablau')){
        message.channel.send('Keep calm and COUNTER IT');
    }

    if(message.content.startsWith('!Orion')){
        message.channel.send('Não era mulher? ;-;');
    }

    if(message.content.startsWith('!Pudimgton')){
        message.channel.send('Vai ser avô ;-;');
    }

    if(message.content.startsWith('!Rhaast')){
        message.channel.send('Seria o único propósito da folha o de cair?');
    }

    if(message.content.startsWith('!Halt')){
        message.channel.send('Let It Go');
    }

    if(message.content.startsWith('!Razar')){
        message.channel.send('Muito á se machucar você ainda tem');
    }

    if(message.content.startsWith('!Kenzo')){
        message.channel.send('Kenzo is a French luxury fashion house founded in 1970 by Japanese designer Kenzo Takada. Kenzo Takada was born in Japan and moved to Paris in 1964 to start his fashion career. He then became known for using Asian and Japanese influenced style with the expert construction of European high fashion.');
    }

    if(message.content.startsWith('!Dante')){
        message.channel.send('O melhor cozinheiro do inferno..;-;');
    }

    if(message.content.startsWith('!Oriana')){
        message.channel.send('Vai matar o filho da mulher que ela quer se casar..;-;');
    }

    if(message.content.startsWith('!Oi')){
        message.channel.send('Olá, como você está?');
    }

    if(message.content.startsWith('!JN')){
        message.channel.send('www.jovemnerd.com');
    }

    if(message.content.startsWith('!YT')){
        message.channel.send('www.youtube.com');
    }


});