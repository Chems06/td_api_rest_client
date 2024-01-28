const axios = require('axios');

const url = 'http://localhost:8080/';
axios.post(url + 'equipes', {
    nom: 'equipe4',
})
    .then(function (response) {
        console.log("Voice les informations de l'équipe que l'on vient de créer");
        console.log(response.data);

        // Une fois l'équipe 4 créée, ajouter les joueurs associés
        axios.post(url + 'joueurs', {
            nom: 'joueur3', prenom: 'joueur3', dateDeNaissance: '2002-06-01', equipe: {
                id: response.data.id,
            }
        })
            .then(function (response) {
                console.log("Voici les informations sur le joueur que l'on vient de créer");
                console.log(response.data);
                axios.post(url + 'joueurs', {
                    nom: 'joueur4', prenom: 'joueur4', dateDeNaissance: '2002-06-01', equipe: {
                        id: response.data.id,
                    }
                })
                    .then(function (response) {
                        console.log("Voici les informations sur le joueur que l'on vient de créer");
                        console.log(response.data);
                        axios.get(url + 'equipes')
                            .then(function (response) {
                                // handle success
                                console.log(response.data.length + ' équipe(s) trouvée(s) :');

                                response.data.forEach(equipe => {
                                    console.log(` - ${equipe.id}, ${equipe.nom}`);

                                    // Afficher la liste des joueurs de l'équipe
                                    equipe.joueurs.forEach(joueur => {
                                        console.log(`   * ${joueur.id}, ${joueur.nom}, ${joueur.prenom}, ${joueur.dateDeNaissance}, ${JSON.stringify(joueur.equipe)}`);
                                    });
                                });
                                axios.get(url + 'joueurs')
                                    .then(function (response) {
                                        // handle success
                                        console.log(response.data.length + ' joueur(s) trouvée(s) :');

                                        response.data.forEach(joueur => {
                                            console.log(` - ${joueur.id}, ${joueur.nom}, ${joueur.prenom}, ${joueur.dateDeNaissance}, ${JSON.stringify(joueur.equipe)}`);
                                        });
                                        axios.delete(url + 'joueurs/4')
                                            .then(function (response) {
                                                // handle success
                                                console.log("Le joueur dont l'id est égale à 4 vient d'être supprimé");
                                                axios.get(url + 'joueurs')
                                                    .then(function (response) {
                                                        // handle success
                                                        console.log(response.data.length + ' joueur(s) trouvée(s) :');

                                                        response.data.forEach(joueur => {
                                                            console.log(` - ${joueur.id}, ${joueur.nom}, ${joueur.prenom}, ${joueur.dateDeNaissance}, ${JSON.stringify(joueur.equipe)}`);
                                                        });
                                                    })
                                                    .catch(function (error) {
                                                        // handle error
                                                        console.log(error);
                                                    });
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                            });
                                    })
                                    .catch(function (error) {
                                        // handle error
                                        console.log(error);
                                    });
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    });




