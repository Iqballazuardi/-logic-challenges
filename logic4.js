// // function num(a){
// //     var nums = ''
// //     for(var i = 0; i < a.length-1; i++){
// //        if(i == 0){
// //         nums = a[i]+a[i+1]
// //        } else if (i != 0){
// //            nums  += a[i+1]
// //        }

// // } var hasil = nums / a.length

// // return Math.round(hasil)

// // }

// // console.log(num([1, 2, 3, 4, 5])); // 3
// // console.log(num([3, 5, 7, 5, 3])); // 5
// // console.log(num([6, 5, 4, 7, 3])); // 5
// // console.log(num([1, 3, 3])); // 2
// // console.log(num([7, 7, 7, 7, 7])); // 7

// function deret(angka){
//     var hasil = []
//     for(i=0;i< angka.length; i ++){
//         if((angka[i+1] - angka[i] || (angka[i] - angka[i-1])) == angka[0]){
//             hasil.push(angka[i])

//         }else{
//             return false

//         }
//     } 
//     if(hasil.toString == angka.toString){
//         return true
//     }

// }
//     console.log(deret([1, 2, 3, 4, 5, 6])); // true
//     console.log(deret([2, 4, 6, 12, 24])); // false
//     console.log(deret([2, 4, 6, 8,10])); // true
//     console.log(deret([2, 6, 18, 54])); // false
//     console.log(deret([1, 2, 3, 4, 7, 9])); // false





// function geo(angka) {
//     var x = 0
//     var hasil = []
//     for (i = 0; i < angka.length; i++) {
//         if (angka[0] * i == angka[1]) {
//             x += i

//         }
//     }
//     for (a = 0; a < angka.length; a++) {
//         if (angka[a] * x == angka[a + 1] || angka[a-1] * x == angka[a]) {
//             hasil.push(angka[a])

//         } else {
//             return false
//         }
//     }

//     if (hasil.toString == angka.toString) {
//         return true
//     }
// }

// console.log(geo([1, 3, 9, 27, 81])); // true
// console.log(geo([2, 4, 8, 16, 32])); // true
// console.log(geo([2, 4, 6, 8])); // false
// console.log(geo([2, 6, 18, 54])); // true
// console.log(geo([1, 2, 3, 4, 7, 9])); // false




function perkalian(num) {
    angka = 0
    hasil = []
    for (i = 0; i < num.length-1; i++) {
        if(i == 0){
            angka += num[i] * num[i + 1]
        }else if (i != 0) {
            angka *= num[i + 1]
        }
    }
    for(x = 0; x<num.length; x++){
        hasil.push(angka / num[x])
    }
    return hasil
}
console.log(perkalian([2, 4, 6])); // [24, 12, 8]
console.log(perkalian([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalian([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalian([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalian([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]