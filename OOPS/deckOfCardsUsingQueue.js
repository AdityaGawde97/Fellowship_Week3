const qUtil = require('../../Fellowship_Week2/Utility/queueUtility')
const queue = new qUtil.Queue();

const utility = require('../Utility/deckOfCardsUtility')
const cards = new utility.cardsDeck();

class cardsGame
{  
    play(){
        //create decks of Card 
        let deck = cards.deckOfCard();
        //console.log(cards);
        console.table(deck);

        //Shuffle Card
        let ShuffleCards= cards.shuffleDeck(deck);
        //console.log(shuffleCat);
        console.table(ShuffleCards);

        let k=0;
        for (let i = 0; i < deck.length; i++) {
            queue.enQueue(ShuffleCards[k++]);
        }

        //Distribute 9 cards to 4 players
        let players = utility.Utility().readLine().questionInt("\nEnter the no of Players : ");
        var noOfcards = utility.Utility().readLine().questionInt("\nEnter the no Of cards distribute : ");
        console.log(`\n${noOfcards} cards distributing to ${players} players\n`);

        for (let i = 0; i < players; i++) {
            console.log(`Player ${i+1} : \n`);
            
            for (let j = 0; j < noOfcards; j++) {
                console.log(queue.deQueue());
            }
            console.log();
        }
    }     
}
const start = new cardsGame();
start.play();