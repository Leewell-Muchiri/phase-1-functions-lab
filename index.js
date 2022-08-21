// Code your solution in this file!
let blocks = distanceFromHqInBlocks
let feet = distanceFromHqInFeet
let blocks1 = destination


function distanceFromHqInBlocks(blocks) {
    if (blocks > 42){
    return blocks - 42;
    }

    else if (blocks <= 42){
    return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks){
    return (distanceFromHqInBlocks(blocks)*264);
}

function distanceTravelledInFeet(blocks,blocks1){
    const distanceTravelledInFeet = (distanceFromHqInBlocks(blocks - blocks1)*264);
    if (distanceTravelledInFeet >= o){
        return distanceTravelledInFeet;
    } else {
        return (distanceTravelledInFeet * -1);
    }
}

function calculatesFarePrice(blocks,blocks1){
    if (distanceTravelledInFeet <= 400){
       return 0;
    }
    else if ((distanceTravelledInFeet > 400) && (distanceTravelledInFeet <=2000)){
       return ((distanceTravelledInFeet - 400)*0.02)
    }
    else if ((distanceTravelledInFeet > 2000) && (distanceTravelledInFeet <=2500)){
       return 25;
    }
    else {
       return 'cannot travel that far';
    }
}