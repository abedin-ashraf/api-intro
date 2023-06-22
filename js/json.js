const user = { id: 11, name: 'Ashraf', job: 'Actor' };
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Store',
    owner: {
        name: 'ALia',
        profession: 'actress'
    },
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
// console.log(shop);

const convert = JSON.parse(shopStringified);
console.log(convert);
console.log(convert.owner);
