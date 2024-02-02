const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'fiches_de_joueurs.js',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖🛡️ FICHES DE JOUEURS 🛡️
  
➖➖➖➖➖➖➖➖➖
A REMPLIR PAR LES JOUEURS ET SOUMETTRE A LA GUILDE POUR VALIDATION ✅⤵️



⚙️pseudo👤:

⚙️SEXE  ♐:

➖➖➖⚙️ ARTEFACTS ⚱️

➡️

➡️

➡️

➖➖⚙️SORTS DE BASE🌀
➡️
➖➖⚙️SORTS AVANCÉ 🌀
➡️
➡️
➡️
➖➖⚙️ ÉQUIPEMENTS⛓️
➡️
➡️
➡️
➡️
➡️
⚙️LEVEL:1
⚙️XP🎮: 
⚙️SOLDES💰:
⚙️ GROUPE👥 :
✅ DERNIÈRE MIS À JOUR 
Le      /   /2024
➖➖➖➖➖➖➖➖➖ 
⚠️NB: pour une inquiétude contacter notre équipe technique 👇
(+22871187823)

🌐WORLD OF HIDEN BLUE 🌐  `);
        }
    }
);