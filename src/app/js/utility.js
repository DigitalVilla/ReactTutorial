export function isNumber (value) {
    if (typeof value !== "string") return false
    return !isNaN(value) && !isNaN(parseFloat(value))
}

export function isEmpty(obj) {
    if (obj === "" || obj === null || obj === {} || obj === [])
        return true;
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}