// ============================================================
// EXO 1
// ============================================================
// let tabNbr = [1, 2, 2];

// function squareSum(tabNbr) {
//     let result = 0;

//     tabNbr.forEach(function (item) {
//         if (item > 0) {

//             // result += item ** 2;
//             result +=  Math.pow(item, 2);
//         }
//     });
//     return result
// }
// console.log(squareSum(tabNbr));


// ============================================================
// EXO 2
// ============================================================

// // Calcul la somme des nbr au carré présent dans un tableau : 
// let tabNbr = [1, 2, 2];

// function squareSum(tabNbr) {
//     return tabNbr.reduce(function (total, nbr) {
//         return (nbr * nbr) + total;
//         // return (Math.pow(nbr, 2)) + total;
//     }, 0)
// }

// OU

// function squareSum(tabNbr) {
//     let result = tabNbr.reduce((summ, current) => summ + Math.pow(current, 2), 0);
//     return result;
// }

// console.log(squareSum(tabNbr));


// ============================================================
// EXO 3
// ============================================================
// COMPTER LE NOMBRE DE TRUE DANS UN TABLEAU 

// let troupeau = [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true];

// function compterBetail(troupeau) {
//     let total = 0;

//     troupeau.forEach((mouton) => {
//         if(mouton == true){
//             total += 1 ;
//             console.log(mouton);
//         }
//     });
//     return total
// }

// console.log(compterBetail(troupeau));

// OU

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }


// ============================================================
// EXO 4
// ============================================================
// RETOUR UN NOUVEAU TABLEAU AVEC LES VALEUR D'UN 1ER TABLEAU X2

// let tab = [1, 2, 3, 4, 5];

// function maps(tab) {
//     let newTab = tab.map(function(element){
//         return element *2;
//     });
//     return newTab
// }

// console.log(maps(tab));

// OU 

// function maps(tab) {
//     return tab.map(n => n * 2);
// }

// ============================================================
// EXO 5
// ============================================================
// CHERCHER L'AIGUILLE DANS UNE MOTTE DE FOIN

// let haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

// function findNeedle(haystack) {
//     let position = haystack.indexOf("needle");
//     let needle = haystack.find(element => element == "needle");

//     return(`found the needle at position ${position}`);
// }
// console.log(findNeedle(haystack));

// OU

// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
// }


// ============================================================
// EXO 6
// ============================================================
// RENVOI LE TOTAL DES CHIFFRES D'UN TABLEAU (IN OU FLOAT) OU 0 SI LE TABLEAU EST VIDE

// let numbers = [1, 5.2, 4, 0, -1];

// function sum(numbers) {
//     "use strict";
//     if (numbers.length == 0) {
//         return 0;
//     } else {
//         return numbers.reduce(function (total, nbr) {
//             return total += nbr;
//         }, 0)
//     }
// };

// console.log(sum(numbers));

// OU

// function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }


// ============================================================
// EXO 7
// ============================================================
// INTERVERTIR DES CHIFFRES (POSITIF => NEGATIF) ET INVERSSEMENT

// let array = invert([1, -2, 3, -4, 5]);

// function invert(array) {
//     let newArray = array.map(nbr => nbr * -1);
//     return newArray;
// }

// console.log(invert(array));

//  OU 

//  const invert = array => array.map(num => -num);


// ============================================================
// EXO 8
// ============================================================
// CALCUL LA MOYENNE D'UN TABLEAU DE NOTES

// let array = [5, 10, 15, 20];

// function findAverage(array) {
//     let moyenne = 0;
//     let somme = 0;

//     if (array.length == 0) {
//         return 0;
//     } 
//     else {
//         for (i = 0; i < array.length; i++) {
//             somme += array[i];
//         }
//         moyenne = somme / i;
//         return moyenne
//     }
// }

// console.log(findAverage(array));

// OU

// var find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }


// ============================================================
// EXO 9
// ============================================================
/* Renvoie un tableau, où le premier élément est le nombre de nombres positifs et le second 
élément est la somme des nombres négatifs. 0 n'est ni positif ni négatif. */


// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];


// function countPositivesSumNegatives(input) {
//     let newInput = [];

//     if (input == null || input.length == 0 ) {
//         return newInput;
//     }else {
//         let positifCount = 0;
//         let negatifSum = 0;

//         for (i = 0; i < input.length; i++) {
//             let currentNumber = input[i];

//             if (currentNumber > 0) {
//                 positifCount++;
//             } else if (currentNumber < 0) {
//                 negatifSum += currentNumber;
//             }
//         }
//         newInput.push(positifCount, negatifSum);
//         return newInput;
//     }
// }

// console.log(countPositivesSumNegatives(input));

// OU

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];

//     var positive = 0;
//     var negative = 0;

//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }

//     return [positive, negative];
// }


// ============================================================
// EXO 10
// ============================================================
// FACTORIELLE

// function grow(x){
//     return x.reduce((sum, current) =>  current * sum );
// }


// ============================================================
// EXO 11
// ============================================================

let array = ["test", "bonjour", "hello", "nuit"];

function check(array, x) {
    let result =  array.find(element => element == x);
    console.log(result);
    return result;
}

console.log(check("hello"));

