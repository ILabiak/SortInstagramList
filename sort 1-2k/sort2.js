'use strict';

const fs = require("fs");

let linesArray = fs.readFileSync('test.txt', 'utf8').split('\n');
let res = [];

const sortfn = (arr) => {

    for (const el of arr) {

        let temp = el.substring(el.indexOf("-") + 2, el.length - 1);
        if (temp <= 2000 && temp >= 1000) {
            res.push(el)
        }

    }

    return res;
}


sortfn(linesArray);
console.log(res)

fs.writeFileSync('Instagram_sort.txt', res.join('\n'), "utf8")


//