function flatten(arr) {
    let stack = [...arr];
    let result = [];

    while (stack.length) {
        let x = stack.pop();
        if (Array.isArray(x)) {
            stack.push(...x); // push elements back into stack
        } else {
            result.push(x);
        }
    }

    return result.reverse(); // reverse because we used stack
}

let arr = [1, [2, 3], [4, [5, 6]]];
console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6]
