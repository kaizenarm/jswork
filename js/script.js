"use strict";

const persone = {
    name: 'alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = "Ann";
console.log(persone);
console.log(clone);
