import {isPositiveInt} from "../../src/number";

describe('isPositiveInt',()=>{
    test.each([
        [undefined, false],
        [1, true],
        ['', false],
        [{}, false],
        [[], false],
        [true, false],
        [null, false],
        [0.01, false],
        [1.01, false],
        [-1.01, false],
        [0, false]
    ])('all to be their result', (item, result) => {
        expect(isPositiveInt(item)).toBe(result);
    })
})
