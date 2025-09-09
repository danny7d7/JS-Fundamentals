#!/usr/bin/node

// Grab arguments after "node" and the script name
const args = process.argv.slice(2);

// args[0] is the first argument, args[1] is the second
console.log(`${args[0]} is ${args[1]}`);
