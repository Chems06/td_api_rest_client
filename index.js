const axios = require('axios');

axios.get('http://localhost:8080/equipes')
    .then(function (response) {
        // handle success
        console.log(response.data.length + ' équipe(s) trouvée(s) :');

        response.data.forEach(equipe => {
            console.log(` - ${equipe.id}, ${equipe.name}`);

            // Afficher la liste des joueurs de l'équipe
            equipe.joueurs.forEach(joueur => {
                console.log(`   * ${joueur.id}, ${joueur.name}, ${joueur.surname}`);
            });
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

axios.get('http://localhost:8080/joueurs')
    .then(function (response) {
        // handle success
        console.log(response.data.length + ' joueur(s) trouvée(s) :');

        response.data.forEach(joueur => {
            console.log(` - ${joueur.id}, ${joueur.name}, ${joueur.surname}, ${joueur.equipe}`);
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });


