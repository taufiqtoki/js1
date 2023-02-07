function gemsToDiamond(abulsGem,babulsGem,cabulsGem) {
    const abulsDiamond = abulsGem * 21;
    const babulsDiamond = babulsGem * 32;
    const cabulsDiamond = cabulsGem * 43;
    const totalDiamond = abulsDiamond + babulsDiamond + cabulsDiamond;
    if (totalDiamond > 1000*2) {
        const weGet = totalDiamond - 2000;
        return weGet;
    }
    else {
        return totalDiamond;
    }
}

// console.log(gemsToDiamond(1, 1, 1));