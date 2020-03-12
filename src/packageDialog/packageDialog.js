import {isEmpty, isNull, isUndefined, type} from "../type";
import {isPositiveInt} from "../number";

const obj = {
    0:'请输入≥1的整数',
    1:'请输入大于上一行的整数',
    2:'上一行须为≥1的整数',
}

export const validatorArea = (area, index) => {
    return (rule, value) => {
        let lastRowValue = area[index - 1];
        const areaLen = area.length;

        if (!(isNaN(value) || isNull(value) || isUndefined(value) || isEmpty(value))) {
            value = Number(value)
        }

        if (!(isNaN(lastRowValue) || isNull(lastRowValue) || isUndefined(lastRowValue) || isEmpty(lastRowValue))) {
            lastRowValue = Number(lastRowValue)
        }
        if (index === 0) {
            if (!isPositiveInt(value)) {
                return obj[0]
            }
            return;
        } else if(index === areaLen-1 && (isUndefined(value) || isEmpty(value))){
            return;
        }else if (isPositiveInt(value)) {
            if(isPositiveInt(lastRowValue)){
                if (value <= lastRowValue) {
                    return obj[1];
                }
                return;
            }

            return obj[2];
        }
        return obj[0];
    }
};
