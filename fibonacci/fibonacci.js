const fibonacci = function(num) {

    num = parseInt(num);
    let a = 0;
    let b = 1;
    let result;

    if (Math.sign(num) === -1) {

        return "OOPS";

    } else if (num <= 1) {

        result = 1;
        return result;

    } else {

        for (let i = 1; i < num; i++) {

            result = a + b;
            a = b;
            b = result;;

        }

        return result;

    }

}

module.exports = fibonacci