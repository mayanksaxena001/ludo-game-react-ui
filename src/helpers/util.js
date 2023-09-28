const isEmptyObject = (obj) => {
    return !obj || JSON.stringify(obj) === '{}';
}

export default isEmptyObject