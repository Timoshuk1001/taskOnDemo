function every(arr, callback) {
    let result = true;

    arr.forEach((num) => {
        result = callback(num) && result
    })

    return result;
}

let result = every([8,4,2], function(num) {
    return num % 2 === 0;
});



module.exports = { every }