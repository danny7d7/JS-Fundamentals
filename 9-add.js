#!/usr/bin/node

function add(a, b) {
  return Number(a) + Number(b);
}

const firstArg = process.argv[2];
const secondArg = process.argv[3];

console.log(add(firstArg, secondArg));
