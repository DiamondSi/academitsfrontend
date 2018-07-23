document.addEventListener("DOMContentLoaded", function () {
    var calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", function () {
        var a = parseFloat(document.getElementById("ka").value);
        var b = parseFloat(document.getElementById("kb").value);
        var c = parseFloat(document.getElementById("kc").value);

        var x;
        var discriminant = b * b - 4 * a * c;

        var bOutput = "+" + b;
        if (b < 0) {
            bOutput = "-" + Math.abs(b);
        }
        if (b === -1) {
            bOutput = "-";
        }
        var cOutput = "+" + c;
        if (c < 0) {
            cOutput = "-" + Math.abs(c);
        }

        var result = a + "x<sup>2</sup> " + bOutput + "x " + cOutput + " = 0";

        if (a === 0 && b === 0 && c === 0) {
            result += " -> Это не квадратное уравнение. x - любоe число.";
        } else if (a === 0 && b === 0) {
            result += " -> неверное математическое выражение";
        } else if (a === 0) {
            x = -c / b;
            result += " -> Это не квадратное уравнение. x = " + x;
        } else if (discriminant < 0) {
            result += ". Дискриминант = " + discriminant + " Корней, на множестве действительных чисел, нет.";
        } else if (discriminant === 0) {
            x = -b / (2 * a);
            if (b === 0) {
                x = 0;
            }
            result += ". Дискриминант = " + discriminant + ", x1 = x2 = " + x;
        } else {
            var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            result += ". Дискриминант = " + discriminant + ", x1 = " + x1 + ", x2 = " + x2;
        }
        var resultOutput = document.getElementById("result");
        resultOutput.innerHTML = result;
    });
});
