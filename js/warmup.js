console.log("Hello");

// let user = "ken2cool"
// function logUser(string) {
//     if(user){
//         return (user + " has logged in for the day.")
//     } else {
//         return false;
//     }
// }
// console.log(logUser(user));

let user = "ken2cool"
function logUser(string) {
    if(user){
        return (`${user} has logged in for the day.`)
    } else if (typeof user === Number(user)) {
        return false;
    } else if (typeof user === isNaN(user)) {
        return false;
    } else {
        return false;
    }
}
console.log(logUser(user));