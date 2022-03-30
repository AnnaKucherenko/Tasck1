async function payload(index, delay) {
    return new Promise((resolve) => {
        
  setTimeout(()=>resolve(`промис ${index}`), delay);
})
}

function rand(min, max){
    return (max-min)*Math.random()+min
}

function randomPromises() {
    let promise;
    for (let i = 1; i <= 5; i++){
        promise = payload([i], rand(100, 1000));
    }    
    return promise;
}

let newPromise = randomPromises();

class CompetitionTurn{
    constructor(concurrency) {
        this.concurrency = concurrency;
    }

    promises = [];

    createArray(promise) {
        for (let i = 0; i < this.concurrency; i++){
            this.promises.push(promise);
        }
        
        console.log(this.promises);
    }
    
    add(promise) {
        this.promises.push(promise);
        console.log(`добавлен ${promise}`)
        console.log(this.promises)
    }
}

const competitionTurn = new CompetitionTurn(20);
competitionTurn.createArray(newPromise);

competitionTurn.add(newPromise);








