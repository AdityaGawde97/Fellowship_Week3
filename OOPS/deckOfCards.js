const utility = require('../Utility/deckOfCardsUtility')
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