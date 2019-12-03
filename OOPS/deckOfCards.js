/**
 * @description : Write a Program DeckOfCards.java, to initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", 
 * "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"). Shuffle 
 * the cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards the received 
 * by the 4 Players using 2D Array…
 * 
 * @author : Aditya Gawde
 * 
 * @since : 26/11/19
 */
const utility = require('../Utility/deckOfCa rdsUtility')
const cards = new utility.cardsDeck();

class cardsGame{

    play(){
        let deck = cards.deckOfCard();
        console.log(deck);
        //console.table(deck);

        //Shuffle Card
        let shuffleCards = cards.shuffleDeck(deck);
        console.log(shuffleCards);
        //console.table(shuffleCards);

        let players = utility.Utility().readLine().questionInt("\nEnter the no of Players : ");
        var noOfcards = utility.Utility().readLine().questionInt("\nEnter the no Of cards distribute : ")
        console.log(`\n${noOfcards} cards distributing to ${players} players\n`);

        var distributeCard = cards.distributeCard( players, noOfcards, shuffleCards );

        //console.table(distributeCard);
        for (let i = 0; i < players; i++) {
            console.log(`Player ${i+1} : \n`);
            
            for (let j = 0; j < noOfcards; j++) {
                console.log(distributeCard[i][j]);
            }
            console.log();
        }
        
    }

}

const start = new cardsGame();
start.play();