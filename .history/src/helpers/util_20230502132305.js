function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}'
}

export default { isEmptyObject }