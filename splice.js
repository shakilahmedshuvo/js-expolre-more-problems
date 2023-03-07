const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

const partial = friends.splice(2, 3, 999, 777, 555);
console.log(partial);
console.log(friends);