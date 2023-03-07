const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: "Agun" };
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// 
function add(num1, num2) {
    return num1 + num2;
}
// 
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array useing array.is array(var name);
console.log(Array.isArray(age));
console.log(typeof add);

// ------------------------------------------------------------

console.log(friends.includes(19));
console.log(friends.includes(20));

// 
if (friends.indexOf(252) !== -1) { };

// concat :.............
const newFriendAge = [12, 13, 11, 13];
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);

