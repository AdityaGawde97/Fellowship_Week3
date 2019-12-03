class cardsDeck{

    /**
     * @returns : array of deck of cards
     */
    deckOfCard(){

        let suits = ["♣️", "♦️", "♥️", "♠️"];
        let ranks = [ "2", "3", "4", "5", "6", "7", "8", "9", "10","King", "Queen", "Jack", "Ace" ];

        let totalLengthOfDeck = ranks.length * suits.length;
        
        // create new array of deck
        var deck = new Array(totalLengthOfDeck);
        for(let i=0; i<ranks.length; i++){

            for(let j=0; j<suits.length; j++){

                deck[ suits.length * i + j] = ranks[i] + ' ' + suits[j];
            }
        }
        return deck;
    } 

    /**
     * @description : shuffling cards deck
     * @param {cards deck} deck 
     * @returns : shuffle deck
     */
    shuffleDeck(deck){
        for(let i = 0; i < deck.length; i++){
            let random = i + parseInt(Math.random() * (deck.length - i));
            let temp = deck[random];
            deck[random] = deck[i];
            deck[i] = temp;
       }
       return deck;
    }

    /**
     * @description : distributing number of cards to the number of player 
     * @param {nomber of player who are playing} players 
     * @param {number cards to be distribute} noOfCards 
     * @param {shuffle cards deck} shuffleDeck 
     */
    distributeCard(players,noOfCards,shuffleDeck){
        let k = 0;
        let playerDeck = new Array();
        for(let i = 0; i < players; i++){
           playerDeck[i] = new Array();
        }
        for(let i = 0; i < players; i++){
           for(let j = 0; j < noOfCards; j++){
                playerDeck[i][j] = shuffleDeck[k++];
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