// coding challenge 2/366

// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i > 0; i--)
//         result.push(i);
//     return result;
// };

const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
