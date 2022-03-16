/* Déclaration de toutes variable utilisées  var ou let? */
var scoreTotal;
var scoreActuel;
var lanceDe;
var tour;

document.querySelector('.newgame').addEventListener('click', refresh);
/* fonction afin de soit initaliser la partie soit rafraichir le table des joueurs pour une nouvelle partie*/
function refresh(){

    scoreTotal = [0, 0];
    scoreActuel = 0;
    tour = 0;
    lanceDe = true;

    document.querySelector('.faces_de').style.display = 'none';
    document.getElementById('scoreTotal_j1').textContent = '0';
    document.getElementById('scoreTotal_j2').textContent = '0';
    document.getElementById('scoreActuel1').textContent = '0';
    document.getElementById('scoreActuel2').textContent = '0';

}


/*jet du dé avec l'event click (bouton jet de dé) */
document.querySelector('.lancer').addEventListener('click', function () {
    if(lanceDe){
        var face = Math.floor(Math.random() * 6)+ 1;

        var resultDe = document.querySelector('.faces_de');
        resultDe.style.display = 'block';
        resultDe.src = 'face_' + face +'.png';

        if(face !== 1){
            scoreActuel += dice ;
            document.querySelector('#scoreActuel_' + tour).textContent == scoreActuel ;
        } else {

            joueur_suivant();
            /* joueur suivant: fonction? variable pour alterner entre les joueurs? */
        }

    }
})

document.querySelector('.ajout_total').addEventListener('click' , function() {

    if(lanceDe){
        if(tour){
            scoreTotal += scoreActuel;
        }
        
        document.querySelector('scoreActuel_'+ tour).textContent = scoreTotal[tour];

        if(scoreTotal[tour] >= 100){
            document.querySelector('#joueur' + tour).textContent = 'Vainqueur';
            document.querySelector('.face').style.display = 'none';
            //document.querySelector('.interface_joueur_' + tour).classList.add('vainqueur');
            document.querySelector('.interface_joueur_' + tour).classList.remove('active');
        }else{
            //joueur suivant
            joueur_suivant();
        }
    }

});

function joueur_suivant(){

    tour == 0 ? tour = 1: tour = 0;
    scoreActuel = 0;

    document.getElementById('scoreActuel_1').textContent = '0';
    document.getElementById('scoreActuel_2').textContent = '0';
    document.querySelector('.interface_joueur_1').classList.toggle('active');
    document.querySelector('.interface_joueur_2').classList.toggle('active');
    document.querySelector('.faces_de').style.display = 'none';
}


