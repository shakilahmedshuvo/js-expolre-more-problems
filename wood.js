/*
1.Chair --> 3 cft;
2.Table -->10 cft;
3.Bed -->50 cft;

vary: quantity
*/

// create function.......
function WoodCalculator(ChairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = ChairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const badWood = bedQuantity * perBedWood;

    // console.log(ChairQuantity, tableQuantity, bedQuantity);

    const totalWood = chairWood + tableWood + badWood;
    return totalWood;
}

// call the function.....
const totalQuantityOfWood = WoodCalculator(1, 1, 1);
console.log("Total wood required:", totalQuantityOfWood);