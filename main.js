// Homework 10

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(value, index, arr) {
    if (value === 5) {
        arr.splice(index, 1);
        return true
    }

    return false;
}

const x = array.filter(removeElement);


console.log(`myArray values: ${array}`);
console.log(`variable x value: ${x}`);




