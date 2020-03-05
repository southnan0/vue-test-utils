import {formatPackageData} from "../../src/packageDialog/formatPackageData";

describe('formatPackageData', () => {
    test('length 2', () => {
        const arr = new Array();
        arr[1] = 123;
        const packageData = {
            area:[1,2],
            price:arr
        }
        expect(formatPackageData(packageData)).toStrictEqual([{
            value:`1-2㎡`,
            label:`123元/㎡`
        }]);
    });

    test('length 1', () => {
        const arr = new Array();
        arr[1] = 123;
        const packageData = {
            area:[1,''],
            price:arr
        }
        expect(formatPackageData(packageData)).toStrictEqual([{
            value:`≥1㎡`,
            label:`123元/㎡`
        }]);
    });

    test('length 4', () => {
        const arr = new Array();
        arr[1] = 123;
        arr[2] = 1223;
        arr[3] = 23;
        const packageData = {
            area:[1,2,100,300],
            price:arr
        }
        expect(formatPackageData(packageData)).toStrictEqual([{
            value:`1-2㎡`,
            label:`123元/㎡`
        },{
            value:`2-100㎡`,
            label:`1223元/㎡`
        },{
            value:`100-300㎡`,
            label:`23元/㎡`
        }]);
    });

    test('length 5', () => {
        const arr = new Array();
        arr[1] = 123;
        arr[2] = 1223;
        arr[3] = 23;
        arr[4] = 13;
        const packageData = {
            area:[1,2,100,300,null],
            price:arr
        }
        expect(formatPackageData(packageData)).toStrictEqual([{
            value:`1-2㎡`,
            label:`123元/㎡`
        },{
            value:`2-100㎡`,
            label:`1223元/㎡`
        },{
            value:`100-300㎡`,
            label:`23元/㎡`
        },{
            value:`≥300㎡`,
            label:`13元/㎡`
        }]);
    });
})
