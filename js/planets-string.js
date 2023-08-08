console.log("Hi.")

let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
let planetsArray = planetsString.split(" , ")

// TODO:
// Convert planetsString to an array, and save it in a variable named
// planetsArray.
// console.log planetsArray to check your work
console.log(planetsArray);

// TODO:
// Create a string with <br> tags between each planet. console.log() your
// results. Why might this be useful?
let planetsArray2 = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let planetsString2 = planetsArray2.join(" <br> ");
console.log(planetsString2);

// BONUS:
// Create another string that would display your planets in an undordered
//  list. You will need an opening AND closing <ul> tags around the entire
//  string, and <li> tags around each planet.

<ul>
    <li>Mercury</li>
    <li>Venus</li>
    <li>Earth</li>
    <li>Mars</li>
    <li>Jupiter</li>
    <li>Saturn</li>
    <li>Uranus</li>
    <li>Neptune</li>
</ul>
