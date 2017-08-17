function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        tim: function (x) { //gange
            result *= x;
        },
        div: function (x) { //dividere
            result /= x;
        },
        pi: function (x) { //pi
            result += Math.PI * x;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.add(2);
calc.add(8);
calc.sub(4);
calc.tim(9);
calc.div(3);
calc.pi(4);
console.log(calc.result());