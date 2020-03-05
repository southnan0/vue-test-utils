import {validatorArea} from '../../src/packageDialog/packageDialog.js';

describe('validatorArea', () => {
    test('tobe undefined', () => {
        const obj = {
            area: [1, ''],
            index: 1,
            value: ''
        };
        expect(validatorArea(obj.area, obj.index)({}, obj.value)).toBe(undefined);
    });

    test('index 1  value 0 请输入≥1的整数', () => {
        const obj = {
            area: [0, ''],
            index: 1,
            value: 0
        };
        expect(validatorArea(obj.area, obj.index)({}, obj.value)).toBe('请输入≥1的整数');
    });

    test('index 1  value 1 上一行须为≥1的整数', () => {
        const obj = {
            area: [0, ''],
            index: 1,
            value: '1',
        };
        expect(validatorArea(obj.area, obj.index)({}, obj.value)).toBe('上一行须为≥1的整数');
    });

    test('index 1 value 1 上一行须为≥1的整数', () => {
        const obj = {
            area: [undefined, ''],
            index: 1,
            value: '1',
        };
        expect(validatorArea(obj.area, obj.index)({}, obj.value)).toBe('上一行须为≥1的整数');
    });

    test('请输入≥1的整数', () => {
        const obj = {
            area: [0, ''],
            index: 0,
            value: ''
        };
        expect(validatorArea(obj.area, obj.index)({}, obj.value)).toBe('请输入≥1的整数');
    });

    test('index 0 beUndefined', () => {
        const obj = {
            area: [0, ''],
            index: 0,
            value: '1',
        };
        expect(validatorArea(obj.area, obj.index)({}, obj.value)).toBe(undefined);
    });

    test('index 0 请输入≥1的整数', () => {
        const obj = {
            area: [1, ''],
            index: 1,
            value: 1.01,
        };
        expect(validatorArea(obj.area, obj.index)({}, obj.value)).toBe('请输入≥1的整数');
    });


});
