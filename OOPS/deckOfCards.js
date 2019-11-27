const utility = require('../Utility/deckOfCardsUtility')
const cards = new utility.cardsDeck();

class cardsGame{

    play(){
        let cat = cards.deckOfCard();
        console.log(cat);
        //console.table(cat);

        //Shuffle Card
        let shuffleCat = cards.shuffleDeck(cat);
        console.log(shuffleCat);
      
        let players = utility.Utility().readLine().questionInt("\nEnter the no of Players : ");
        var noOfcards = utility.Utility().readLine().questionInt("\nEnter the no Of cards distribute : ")
        var distribute = cards.distributeCard( players, noOfcards, shuffleCat );
        console.table(distribute);
        
    }

}

const start = new cardsGame();
start.play();