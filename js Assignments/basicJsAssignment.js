/* 
Problem 1: Let’s play a mind game
*/

// this function does some arithmetic operation
function mindGame(n) {
    if (typeof n != "number" || n < 0) {
        console.log("Please enter a Positive Number");
    }
    else {
        return ((n * 3) + 10) / 2 - 5;
    }
}

// End of Problem 1

/* 
Problem 2: Finding even or odd
*/

// this function returns even or odd from given string length
function evenOdd(str) {
    if (typeof str != 'string') {
        console.log("Please input a String");
    }
    else if (str.length % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}


// End of Problem 2

/*
Problem 3: Is Less or Greater than seven
*/

/* this function finds difference between given 
number and 7 also does some arithmetic operations */
function isLGSeven(n) {
    if (typeof n != "number") {
        console.log("Please enter a Number");
    }
    else if (n < 7) {
        return n - 7;
    }
    else {
        return n * 2;
    }
}

// End of Problem 3

/*
Problem 4: Finding Bad data
*/

// this function finds Bad data entries and returns count
function findingBadData(ages) {
    if (Array.isArray(ages)) {
        let badData = [];
        for (let i = 0; i < ages.length; i++) {
            const element = ages[i];
            if (element <= 0) {
                badData.push(element);
            }

        }
        return badData.length;
    }
    else {
        console.log("Plese input a Valid Array")
    }
}

// const friendsAge=[2, -5, -7, -13];


// End of Problem 4

/*
Problem 5: Convert your gems into diamond
*/

// this function does some arithmetic operation
function gemsToDiamond(abulsGem, babulsGem, cabulsGem) {
    if (typeof abulsGem !== "number" || typeof babulsGem !== "number" || typeof cabulsGem !== "number") {
        console.log("Please input 3 numbers");
    }
    else {
        const abulsDiamond = abulsGem * 21;
        const babulsDiamond = babulsGem * 32;
        const cabulsDiamond = cabulsGem * 43;
        const totalDiamond = abulsDiamond + babulsDiamond + cabulsDiamond;
        if (totalDiamond > 1000 * 2) {
            const weGet = totalDiamond - 2000;
            return weGet;
        }
        else {
            return totalDiamond;
        }

    }
}

// End of Problem 5