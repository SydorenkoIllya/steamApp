import { moment } from "moment"
const arr = [
    {
        a: 5,
        price: ' '
    },
    {
        a: 4,
        price: " 3,99€ "
    },
    {
        a: 6,
        price: " Free To Play "
    },
    {
        a: 2,
        price: " 1,99€ "
    },
    {
        a: 1,
        price: " Free "
    },
    {
        a: 3,
        price: " 39,99€ "
    },
    {
        a: 7,
        price: ' 0.99€ '
    }]
// console.log(parseInt('Free'));
console.log(Number(arr[6].price.trim().slice(0, -1).replace(/,/, '.')));

let lexa = arr.sort((a, b) => {
    const x = Number(a.price.trim().slice(0, -1).replace(/,/, '.'))
    const y = Number(b.price.trim().slice(0, -1).replace(/,/, '.'))
    if (!Number.isNaN(x) && Number.isNaN(y)) {
        return -1
    } else if (Number.isNaN(x) && !Number.isNaN(y)) {
        return 1
    } else if (x === 0 || y === 0) {
        return -1
    } else if (!Number.isNaN(x) && !Number.isNaN(y)) {
        return a - b
    } else {
        return -1
    }
})

console.log(lexa);


const ar = ['', 3.99, 'Free To Play', 1.99, 'Free', 12.49, 2.59]
console.log(ar.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b
    } else if (typeof a === 'string' && typeof b === 'number') {
        return 1
    } else if (typeof a === 'number' && typeof b === 'string') {
        return -1;
    } else if (a === '' || b === '') {
        return -1
    }
}))

console.log(moment().format())