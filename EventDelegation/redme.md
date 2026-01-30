What is Event Delegation? (1-line)

Event delegation means adding ONE event listener to a parent instead of adding many listeners to each child.



the event propagates (bubbles) to the parent.

🧠 Simple Explanation

When you click a child element:

Event starts on the child

Then it bubbles up to

parent

grandparent

document

window

👉 That’s why event delegation works
👉 Parent “hears” the child’s click