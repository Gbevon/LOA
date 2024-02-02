const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'duels.js',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖➖➖🛡️ DUELS🛡️
   
➖➖➖➖➖➖➖➖➖
➖➖➖🎮 JOUEURS:

🛡:  % ❤️:  % 🔋:  % 
⏱️TR:   🏃‍♂️ VD:    💪F:
➖➖➖🎮 JOUEURS :

🛡:  % ❤️:  % 🔋:  % 
⏱️TR:   🏃‍♂️ VD:    💪F:
➖➖➖➖➖➖➖➖➖
🌏 ENVIRONNEMENT :

⚖️EQUIVALENCE:

🕓LATENCE:12MIN

👨‍🦽HANDICAP :

     ➖⚙️ RÈGLES PENDANT DUELS

⚠️Toutes formes d'insultes a l'égard du MODOS sont sanctionné .
⚠️Les discussions pendant les duels sont interdit sa casse le rythme du combat.
⚠️Vous pouvez demander au modo de vous donner la situation globale du match ou d'une action adverse mais en précisant que vous mettez en pause⏸️le temps d'une question

⚠️Un retard sans raison valable est sanctionnée
⚠️ Après chaque pannel taguer le modo et attendez sa confirmation avant de next➡️

➖➖➖➖➖➖➖➖➖
⚠️NB: pour une contestation de la décision de l'arbitre vous pouvez faire appel à la var⁉️mais en cas de tort vous recevrait de grave sanctions 👇
(+22871187823)

🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);