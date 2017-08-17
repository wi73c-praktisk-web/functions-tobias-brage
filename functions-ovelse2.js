var result = 0;

function mathCal1(getNum) {
    result += getNum;
}

function mathCal2(getNum) {
    result -= getNum;
}

function mathCal3(getNum) {
    result *= getNum;
}

function mathCal4(getNum) {
    result /= getNum;
}

function mathCal5() { //calculate with PI
    result = result + getNum * Math.PI;
}

mathCal1(5);
mathCal2(2);
mathCal3(6);
mathCal4(9);
mathCal5(2);

console.log(result);