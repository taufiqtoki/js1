function findingBadData(ages) {
    let badData = [];
    for (let i = 0; i < ages.length; i++) {
        const element = ages[i];
        if (element <= 0) {
            badData.push(element);
        }
        
    }
    return badData.length;
}

const friendsAge= [1,2,5]
console.log(findingBadData(friendsAge));