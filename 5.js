// function gemsToDiamond(abulsGem,babulsGem,cabulsGem) {
//     const abulsDiamond = abulsGem * 21;
//     const babulsDiamond = babulsGem * 32;
//     const cabulsDiamond = cabulsGem * 43;
//     const totalDiamond = abulsDiamond + babulsDiamond + cabulsDiamond;
//     if (totalDiamond > 1000*2) {
//         const weGet = totalDiamond - 2000;
//         return weGet;
//     }
//     else {
//         return totalDiamond;
//     }
// }

// // console.log(gemsToDiamond(1, 1, 1));

function gemsToDiamond(abulsGem, babulsGem, cabulsGem) {
    if (isNaN(abulsGem) || isNaN(babulsGem) || isNaN(cabulsGem)) {
        console.log("Please input 3 numbers");
    } else {
        const abulsDiamond = abulsGem * 21;
        const babulsDiamond = babulsGem * 32;
        const cabulsDiamond = cabulsGem * 43;
        const totalDiamond = abulsDiamond + babulsDiamond + cabulsDiamond;
        if (totalDiamond > 1000*2) {
            const weGet = totalDiamond - 2000;
            return weGet;
        } else {
            return totalDiamond;
        }
    }
}

console.log(gemsToDiamond("a",1,1));
