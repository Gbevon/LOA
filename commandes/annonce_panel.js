const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'annonce.js',
        categorie: 'World of Hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖⭕ ANNONCE SPÉCIAL 📣
  🔰🔰🔰🔰🔰🔰🔰🔰🔰

➖➖➖➖➖➖➖➖➖
➖📣 ANNONCE 🗣️

⚙️





⚙️SOURCE DU MESSAGE :
➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐  `);
        }
    }
);