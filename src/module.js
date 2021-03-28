const ppl = require("./people"); // Import modules from other files
console.log(ppl);
console.log(ppl.people);
console.log(ppl.ages);
//--------------------------------------------------
console.log("Destructring Syntax");
const { people, ages } = require("./people"); // Import modules from other files using desctructing
console.log(people);
console.log(ages);
//--------------------------------------------------
console.log("Core Module Example"); // Core module of node
const os = require("os");
console.log(os);
console.log(os.homedir(), os.platform());
//--------------------------------------------------
