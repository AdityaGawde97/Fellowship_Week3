class cardsDeck{

    deckOfCard(){

        let suits = ["♣️", "♦️", "♥️", "♠️"];
        let ranks = [ "2", "3", "4", "5", "6", "7", "8", "9", "10","King", "Queen", "Jack", "Ace" ];

        let totalLengthOfDeck = ranks.length * suits.length;
        
        // create new array of deck
        var cat = new Array(totalLengthOfDeck);
        for(let i=0; i<ranks.length; i++){

            for(let j=0; j<suits.length; j++){

                cat[ suits.length * i + j] = ranks[i] + ' ' + suits[j];
            }
        }
        return cat;
    } 

    shuffleDeck(deck){
        for(let i = 0; i < deck.length; i++){
            let random = i + parseInt(Math.random() * (deck.length - i));
            let temp = deck[random];
            deck[random] = deck[i];
            deck[i] = temp;
       }
       return deck;
    }

    distributeCard(players,noOfCards,shuffleCat){
        let k = 0;
        let playerDeck = new Array();
        for(let i = 0; i < players; i++){
           playerDeck[i] = new Array();
           for(let j = 0; j < noOfCards; j++){
                playerDeck[i][j] = shuffleCat[k++];
            }
        }
        return playerDeck;
    }
}
module.exports = {

    cardsDeck,

    Utility(){
        const utility = require('../Utility/oopsUtility');
        return utility;
    }

}