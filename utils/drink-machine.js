class DrinkMachine {
    servedrink(size){
        if(size=="large"){
            console.log("serving complimentary");
        }
        else console.log(`serving drink size ${size}`)
    }
}

module.exports = DrinkMachine;