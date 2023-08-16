console.log("hello");

let object = {
    username: "ken2cool",
    email: "ken2cool@yahoo.com"
};

let userObject = object;

console.log(userObject.username);
console.log(userObject.email);

function logUser(object) {
    if (typeof object.username !== "string" || typeof object.email !== "string") {
        return false;
    }
    return `${object.username} with email ${object.email} has logged in for the day.`
    console.log(logUser(userObject));
}

userObject.userRoles = ["admin", "moderator", "buyer", "seller", "reviewer"];
console.log(userObject.userRoles);

userObject.userProfile = {
    userProfileUrl: "myURLToPicture.jpg",
    userLocation: "Houston, Texas",
    numLikes: 300
}
console.log(userObject.userProfile.userProfileUrl);
console.log(userObject.userProfile.userLocation);