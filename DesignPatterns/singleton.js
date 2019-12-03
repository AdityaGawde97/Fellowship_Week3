
class Singleton {
    constructor(string) {
        
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.string = string;
        Singleton.instance = this;
        return Singleton.instance;
    }

    getData() {
        return this.string;
    }

    setData(string) {
        this.string = string;
    }
}

const name1 = new Singleton('Aditya');
console.log('1 : '+name1.getData());

const name2 = new Singleton('Deepak');
console.log('2 : '+name2.getData()); 

name1.setData('Gawde')
console.log('3 : '+name2.getData()); 

const name3 = new Singleton('Thakur');
console.log('4 : '+name3.getData()); 