const fs = require('fs');
const { SHA1, SHA256, SHA512 } = require('crypto-js');


class Audit {
    constructor() {
        const f = this.getFile('./src/car.js');
        console.log(f);
        const hash = SHA256(f);
        console.log(hash.toString());
    }

    getFile = (pathToFile) => fs.readFileSync(pathToFile, 'utf8');
}

new Audit();