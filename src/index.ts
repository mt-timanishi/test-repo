import * as bunyan from 'bunyan';
const log = bunyan.createLogger({ name: 'test' });

export type Public = {
    a: string,
    b: number
};

type Private = {
    a: number,
    b: string
};

const pub: Public = {
    a: 'a',
    b: 1
};

const pri: Private = {
    a: 1,
    b: 'b'
};

log.info(pub, pri, 'This is test');

export default pub;

export function testA() {
    return 1;
}

// module.exports = pub;
// module.exports.testA = function () {
//     return 1;
// }
