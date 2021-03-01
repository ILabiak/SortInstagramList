'use strict';

const fs = require("fs");

let linesArray = fs.readFileSync('Instagram.txt', 'utf8').split('\n');
let res = [];

const sortfn = (arr) => {


    for (const el of arr) {

        if (el.includes('PROFILE')) {
            let temp, temp2;
            temp = el.replace('PROFILE URL - ', '')
            if (temp.includes('PHONE_VERIF - True')) {
                temp2 = temp.replace(' || PHONE_VERIF - True || SUBSCRIBERS', '')
            } else {
                temp2 = temp.replace(' || PHONE_VERIF - False || SUBSCRIBERS', '')
            }
            res.push(temp2)
        }
    }

    return res;
}


sortfn(linesArray);
console.log(res)

fs.writeFileSync('Instagram_sort.txt', res.join('\n'), "utf8")


//