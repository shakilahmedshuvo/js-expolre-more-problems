const names = ['abul', 'babul', 'cabul', 'dabul', 'eabul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

// funcation section.......................
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        // console.log(name);
        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique;
}

// call the funcation......
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
