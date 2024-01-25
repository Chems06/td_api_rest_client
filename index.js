const axios = require('axios');


axios.post('http://localhost:8080/equipes', {
    name: 'equipe4',
})
    .then(function (response) {
        console.log(response.data);

        // Une fois l'équipe 4 créée, ajouter les joueurs associés
        axios.post('http://localhost:8080/joueurs', {
            name: 'joueur3',
            surname: 'joueur3',
            equipe: {
                id: response.data.id,
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.post('http://localhost:8080/joueurs', {
            name: 'joueur4',
            surname: 'joueur4',
            equipe: {
                id: response.data.id,
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    .catch(function (error) {
        console.log(error);
    });


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
            console.log(` - ${joueur.id}, ${joueur.name}, ${joueur.surname}, ${JSON.stringify(joueur.equipe)}`);
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });


