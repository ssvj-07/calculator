let input = document.querySelector("input")

function insertVal(val) {
    input.value += val 
}

function deleteVal() {
    input.value = input.value.trim()
    input.value = input.value.slice(0, input.value.length - 1)
}

function clearVal() {
    input.value = ""
}

function evaluateVal() {
    input.value = eval(input.value)
}

input.addEventListener("keydown", (e) => {
    const allowedKeys = /[0-9+\-*/().]/;

    if (
        e.key.length === 1 &&
        !allowedKeys.test(e.key)
    ) {
        e.preventDefault();
    }
});
