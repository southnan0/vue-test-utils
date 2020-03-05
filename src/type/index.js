export const isNull = (value) => {
    return value === null;
};

export const isUndefined = (value) => {
    return value === undefined;
}

export const isEmpty = (value) => {
    if(type(value) !== 'string'){
        return false
    }
    return  value.trim() === '';
}

export const type = (value) => {
    if (isNull(value)) {
        return null
    } else if (isUndefined(value)) {
        return undefined
    } else {
        const typeValue = typeof (value);
        if (typeValue === "object") {
            const objectType = Object.prototype.toString.call(value);

            if (objectType === "[object Array]") {
                return "array"
            } else if (objectType === "[object Object]") {
                return "object"
            }
        } else {
            return typeValue
        }
    }

};
