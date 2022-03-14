/* Déclaration de toutes variable utilisées  var ou let? */
let scoreTotal;
let scoreActuel;
let lanceDe;

/*jet du dé avec l'event click (bouton jet de dé) */
document.querySelector('.lancer').addEventListener('click', function () {
    if(lanceDe){
        var face = Math.floor(Math.random()* 6)+ 1;

        let resultDe = document.querySelector('faces_de');
        resultDe.src = 'face' + face +'.png';

        if(dice != 1){
            scoreActuel + dice ;
            document.getElementById('#scoreActuel' + active).textContent == scoreActuel ;
        } else {
            scoreActuel == 0;
            /* joueur suivant: fonction? variable pour alterner entre les joueurs? */
        }

    }
})