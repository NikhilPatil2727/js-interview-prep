 1️⃣ Promise.all() → “All must pass” What it does

Runs all promises together

They are execute in parallel; 

✅ Resolves only if ALL succeed  //this is imp line 

❌ Fails immediately if ANY fails


*****************************************************************************


 2️⃣ Promise.race() → “First finished wins”

 What it does

 Runs all promises together

 Returns first completed promise

 That first one can be ✅ success or ❌ failure

 Simple meaning

“Whoever finishes first, I accept it”

******************************************************************************************


| Method           | What it waits for | When it resolves | When it rejects    |
| ---------------- | ----------------- | ---------------- | ------------------ |
| `Promise.race()` | First **finish**  | First resolve    | First reject       |
| `Promise.any()`  | First **success** | First resolve    | Only if all reject |


*****************************************************************************************


3️⃣ Promise.any() → “First success wins”
What it does

Runs all promises together

✅ Resolves when first SUCCESS happens

❌ Rejects only if ALL fail

*****************************************************************************



4️⃣ Promise.allSettled() → “Tell me everything”
What it does

Runs all promises

Never fails

Gives result of each promise

Simple meaning

“Show me who passed and who failed”






*****************************************************************************

const p1 = new Promise((_, reject) =>
  setTimeout(() => reject("❌ Error from p1"), 1000)
);

const p2 = new Promise(resolve =>
  setTimeout(() => resolve("✅ Success from p2"), 2000)
);

Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log(error));



❌ Error from p1





