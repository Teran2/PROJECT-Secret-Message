let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Step 1
secretMessage.pop();

// Step 2
// console.log(secretMessage.length);

// Step 3
secretMessage.splice(23, 0, 'to', 'program');

// Step 4
secretMessage.splice(7, 1, 'right');

// Step 5
secretMessage.shift();

// Step 6
secretMessage.splice(0, 0, 'Programming');

// Step 7
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join());
