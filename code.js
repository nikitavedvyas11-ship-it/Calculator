let total = 0;
let curr = "";
let operator = null;
let expression = "";

let result = document.getElementById("result");
result.value = curr;

// Number buttons
let btn_0 = document.getElementById("btn-17");
btn_0.addEventListener("click", function () {
    curr += btn_0.value;
    expression += btn_0.value;
    result.value = expression;
    console.log(curr);
});

let btn_00 = document.getElementById("btn-18");
btn_00.addEventListener("click", function () {
    curr += btn_00.value;
    expression += btn_00.value;
    result.value = expression;
    console.log(curr);
});

let btn_1 = document.getElementById("btn-13");
btn_1.addEventListener("click", function () {
    curr += btn_1.value;
    expression += btn_1.value;
    result.value = expression;
    console.log(curr);
});

let btn_2 = document.getElementById("btn-14");
btn_2.addEventListener("click", function () {
    curr += btn_2.value;
    expression += btn_2.value;
    result.value = expression;
    console.log(curr);
});

let btn_3 = document.getElementById("btn-15");
btn_3.addEventListener("click", function () {
    curr += btn_3.value;
    expression += btn_3.value;
    result.value = expression;
    console.log(curr);
});

let btn_4 = document.getElementById("btn-9");
btn_4.addEventListener("click", function () {
    curr += btn_4.value;
    expression += btn_4.value;
    result.value = expression;
    console.log(curr);
});

let btn_5 = document.getElementById("btn-10");
btn_5.addEventListener("click", function () {
    curr += btn_5.value;
    expression += btn_5.value;
    result.value = expression;
    console.log(curr);
});

let btn_6 = document.getElementById("btn-11");
btn_6.addEventListener("click", function () {
    curr += btn_6.value;
    expression += btn_6.value;
    result.value = expression;
    console.log(curr);
});

let btn_7 = document.getElementById("btn-5");
btn_7.addEventListener("click", function () {
    curr += btn_7.value;
    expression += btn_7.value;
    result.value = expression;
    console.log(curr);
});

let btn_8 = document.getElementById("btn-6");
btn_8.addEventListener("click", function () {
    curr += btn_8.value;
    expression += btn_8.value;
    result.value = expression;
    console.log(curr);
});

let btn_9 = document.getElementById("btn-7");
btn_9.addEventListener("click", function () {
    curr += btn_9.value;
    expression += btn_9.value;
    result.value = expression;
    console.log(curr);
});

// Plus
let btn_plus = document.getElementById("btn-16");
btn_plus.addEventListener("click", function () {
    if (curr == "") {
        expression = expression.slice(0, -1); // last operator hata do
        operator = btn_plus.value;            // naya operator store karo
        expression += operator;               // expression me add karo
        result.value = expression;            // display update karo
        return;
    }
        curr = "";
        operator = btn_plus.value;

        expression += operator;
        result.value = expression;

        console.log("Updated total =", total);
        console.log("New operator =", operator);
    }
);

// Minus
let btn_sub = document.getElementById("btn-12");
btn_sub.addEventListener("click", function () {
    if (curr == "") {
        expression = expression.slice(0, -1); // last operator hata do
        operator = btn_sub.value;            // naya operator store karo
        expression += operator;               // expression me add karo
        result.value = expression;            // display update karo
        return;
    }
        curr = "";
        operator = btn_sub.value;

        expression += operator;
        result.value = expression;

        console.log("Updated total =", total);
        console.log("New operator =", operator);
    }
);

// Multiply
let btn_mul = document.getElementById("btn-8");
btn_mul.addEventListener("click", function () {
    if (curr == "") {
        expression = expression.slice(0, -1); // last operator hata do
        operator = btn_mul.value;            // naya operator store karo
        expression += operator;               // expression me add karo
        result.value = expression;            // display update karo
        return;
    }
        curr = "";
        operator = btn_mul.value;

        expression += operator;
        result.value = expression;

        console.log("Updated total =", total);
        console.log("New operator =", operator);
    }
);
// Divide
let btn_div = document.getElementById("btn-4");
btn_div.addEventListener("click", function () {
    if (curr == "") {
        expression = expression.slice(0, -1); // last operator hata do
        operator = btn_div.value;            // naya operator store karo
        expression += operator;               // expression me add karo
        result.value = expression;            // display update karo
        return;
    }

        curr = "";
        operator = btn_div.value;

        expression += operator;
        result.value = expression;

        console.log("Updated total =", total);
        console.log("New operator =", operator);
    }
);


// Equal
let btn_equal = document.getElementById("btn-20");
btn_equal.addEventListener("click", function () {
    total = eval(expression);

    result.value = total;

    curr = total.toString();
    expression = curr;
    operator = null;

    console.log("Output =", total);
});

//DOT
let btn_d = document.getElementById("btn-19");
btn_d.addEventListener("click", function () {
    curr += btn_d.value;
    expression += btn_d.value;
    result.value = expression;
    console.log(curr);
});

// AC
let btn_AC = document.getElementById("btn-1");
btn_AC.addEventListener("click", function () {
    total = 0;
    curr = "";
    operator = null;
    expression = "";
    result.value = " ";
    console.log("Cleared");
});
//DEL
let btn_DEL = document.getElementById("btn-2");
btn_DEL.addEventListener("click", function () {
    curr = curr.slice(0, -1);
    expression = expression.slice(0, -1);
    result.value = expression;
});