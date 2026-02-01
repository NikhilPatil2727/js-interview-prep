A Higher Order Function is a function that:

takes another function as an argument, OR

returns a function as its result



## 🔹 some() (AT LEAST ONE)

👉 Returns **true** if **ANY ONE** element matches the condition.

### Real-life example
👀 In a class, is there **at least one student** who passed?

### Code example
```js
const marks = [35, 40, 80];

const passed = marks.some(m => m >= 40);
console.log(passed); // true



🔹 every() (ALL)

👉 Returns true only if ALL elements match the condition.

Real-life example

👀 Did all students submit homework?

Code example
const nums = [2, 4, 6];

nums.every(n => n % 2 === 0);
// true




