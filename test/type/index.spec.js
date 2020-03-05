import {isEmpty, isNull, isUndefined, type} from "../../src/type";

describe('isNull', () => {

    test('true', () => {
        expect(isNull(null)).toBe(true);
    })

    test.each([undefined, 1, '', {}, [], true])('all to be false', (item) => {
        expect(isNull(item)).not.toBe(true);
    })
})

describe('isUndefined', () => {
    test.each([
        [undefined, true],
        [1, false],
        ['', false],
        [{}, false],
        [[], false],
        [true, false],
        [null, false]
    ])('all to be their result', (item, result) => {
        expect(isUndefined(item)).toBe(result);
    })
})

describe('isEmpty', () => {
    test.each([
        [undefined, false],
        [1, false],
        ['', true],
        [{}, false],
        [[], false],
        [true, false],
        [null, false]
    ])('all to be their result', (item, result) => {
        expect(isEmpty(item)).toBe(result);
    })
})

describe('type',()=>{
    test.each([
        [undefined, undefined],
        [1, "number"],
        [NaN, "number"],
        ['', "string"],
        [{}, "object"],
        [[], "array"],
        [true, "boolean"],
        [false, "boolean"],
        [null, null]
    ])('all to be their result', (item, result) => {
        expect(type(item)).toBe(result);
    })
});

