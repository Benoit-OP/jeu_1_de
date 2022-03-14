/* Déclaration de toutes variable utilisées  var ou let? */
let scoreTotal;
let scoreActuel;
let lanceDe;
let tour;

/*jet du dé avec l'event click (bouton jet de dé) */
document.querySelector('.lancer').addEventListener('click', function () {
    if(lanceDe){
        var face = Math.floor(Math.random()* 6)+ 1;

        let resultDe = document.querySelector('faces_de');
        resultDe.src = 'face' + face +'.png';

        if(face !== 1){
            scoreActuel += dice ;
            document.getElementById('#scoreActuel' + tour).textContent == scoreActuel ;
        } else {
            scoreActuel == 0;
            /* joueur suivant: fonction? variable pour alterner entre les joueurs? */
        }

    }
})

document.querySelector('.ajout_total').addEventListener('click' , function() {

    if(lanceDe){
        if(tour){
            scoreTotal += scoreActuel;
        }
        
        document.querySelector('')
    }



})