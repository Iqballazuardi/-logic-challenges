function str(string){
    var nama = ''
    for(i = string.length-1 ; i > 0; i--){
      nama += string[i]
    }
    var newnama = nama += string[i];
    

    if( newnama == string){
        return true
    }else{
        return false
    }
    
    
}


console.log(str('katak')); // true
console.log(str('blanket')); // false
console.log(str('civic')); // true
console.log(str('kasur rusak')); // true
console.log(str('mister')); // false






// 1 rubah integer jadi string
// 2 jika angka sudah palindrome +1
// 3 jika angka belum palindrome loping sampai angka jadi palindrome
// 4 jika sudah palin drome munculkan



// function input(z){
//    var angka = z.toString();
//    var angka1 = ''
//    for(i = angka.length -1; i > 0; i--){
//     angka1 += angka[i]
//     }
//     var angka2 = angka1 += angka[i]
    
//     if(angka2 == z){
//         for(i = 1;i < 1000;i++){

//         }
//            var a = parseInt(angka2)
//        var b = a + 1
//        var c = b.toString();
//     }else if(angka2 != z){
//         for(i=1;i<1000;i++){
//             var d = parseInt(angka2)
//             var e = d + i
//             if(d == a){
//                 var f = e.toString();
//                 break;
//             }else if (d != a){
//                 continue;
//             }
            


//     }
        
//     }
//     // console.log(f)
//     console.log(c)

// }

// input(21)



function kata(input) {
    var banyak = 1
    for(i=0;i<input.length;i++){
        if(input[i] == ' '){
       banyak++
        }
    } return banyak
}
console.log(kata('I have a dream')); // 4
console.log(kata('Never eat shredded wheat or cake')); // 6
console.log(kata('A song to sing')); // 4
console.log(kata('I')); // 1
console.log(kata('I believe I can code')); // 5



