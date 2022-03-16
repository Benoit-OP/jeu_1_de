/* Déclaration de toutes variable utilisées  var ou let? */
var scoreTotal;
var scoreActuel;
var lanceDe;
var tour;

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
        
        document.querySelector('scoreActuel'+ tour).textContent = scoreTotal[tour];

        if(scoreTotal[tour] >= 100){
            document.querySelector('#joueur' + tour).textContent = 'Vainqueur';
            document.querySelector('.face').style.display = 'none';
            //document.querySelector('.interface_joueur_' + tour).classList.add('vainqueur');
            document.querySelector('.interface_joueur_' + tour).classList.remove('active');
        }else{
            //joueur suivant
        }
    }



})