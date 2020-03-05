import {isNull, isUndefined} from "../type";

const defaultCheck = (value,error=false)=>{
    if(isUndefined(value) || isNull(value)){
        if(error === true){
            throw 'squareMetre value cannot be undefined or null'
        }else if(error !== false){
            value = error
        }else {
            value = ''
        }
    }
    return value;
}

export const squareMetre = (value,error=false)=>`${defaultCheck(value,error)}㎡`;

export const yuanSquaMetre = (value,error=false)=>`${defaultCheck(value,error)}元/㎡`;
