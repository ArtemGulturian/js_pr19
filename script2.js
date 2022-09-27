'use strict';

// const now = new Date('2020-05-01');
// const now = new Date();

// console.log(now.setHours(40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`цикл отработал ${end - start}`);