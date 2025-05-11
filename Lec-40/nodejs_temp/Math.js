
function add(a, b) {
    return a + b;
}

function multiply(a,b){
    return a*b;
}

// module.exports = {
//     add
// };

module.exports = add;

// export default add;

module.exports = {add}
export {add, multiply};