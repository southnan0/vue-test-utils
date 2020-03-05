import {isEmpty, isNull, isUndefined, type} from "../type";
import {squareMetre, yuanSquaMetre} from "../postfix";

const isInfinity = (value)=>{
    return isUndefined(value) || isNull(value) || isEmpty(value)
}

export const formatPackageData = (packageData)=>{
    const {area,price} = packageData || {};

    if(type(area) === 'array' && type(price) === 'array'){
        const arr = area.slice(1);
        const arrPrice = price.slice(1);
        if(arr.length === 0){
            return [{
                value: squareMetre(`≥${area[0]}`),
                label: yuanSquaMetre(price[0])
            }]
        }
        return arr.map((item,index)=>{
            return {
                value:squareMetre(isInfinity(item) ?`≥${area[index]}`:`${area[index]}-${item}`),
                label: yuanSquaMetre(arrPrice[index])
            }
        })
    }
}
