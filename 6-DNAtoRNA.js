// 6/366

// function DNAtoRNA(dna) {
//     let rna = '';
//     for(let i = 0; i < dna.length; i++) {
//         if(dna[i] === 'T') {
//             rna += 'U';
//         } else {
//             rna += dna[i];
//         }
//     }
//     return rna;
// }

// function DNAtoRNA(dna) {
//     let rna = '';
//     for(let i = 0; i < dna.length; i++) {
//         rna += dna[i] === 'T' ? 'U' : dna[i];
//     }

//     return rna;
// }

// const DNAtoRNA = (dna) => dna.split('').map((el) => (el === 'T'  ? 'U' : el)).join('');

// const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('TTTT'));

