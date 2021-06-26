var perbandingan = function(a,b){
    if(a < b){
        return true;
    }else if(a == b){
        return -1;
    }else{
        return false;
    }
}
perbandingan();
console.log(perbandingan(5, 8)); // true
console.log(perbandingan(5, 3)); // false
console.log(perbandingan(4, 4)); // -1
console.log(perbandingan(3, 3)); // -1
console.log(perbandingan(17, 2)); // false




function reverseStr(string){
    var nama = ''
    for(i = string.length-1 ; i > 0; i--){
      nama += string[i]
    }
    var newnama = nama += string[i];
    return newnama

    
    
}
console.log(reverseStr(' Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseStr(' John Doe')); // eoD nhoJ
console.log(reverseStr(' I am a bookworm')); // mrowkoob a ma I
console.log(reverseStr(' Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseStr(' Super')); // repuS







var waktu = function (number) {
    var jam = Math.floor(number/60);
    var menit = (number % 60) ;
    if( menit <= 10){
        return jam + ":" + + '0'+ menit
    }else{
        return jam + ":" + menit;
    }
    
}
console.log(waktu(63)); // 1:03
console.log(waktu(124)); // 2:04
console.log(waktu(53)); // 0:53
console.log(waktu(88)); // 1:28
console.log(waktu(120)); // 2:00

waktu(160);
var str = 'xoxox'
var x = ''
var o = ''
function xo(str){
   for(i = 0; i <= str.length; i++){
       if(str[i] == 'x'){
            x += str[i]
       }else if(str[i] == 'o'){
            o += str[i]
       }
   }

   if(x.length == o.length){
      console.log(true)
   }else if(x.length != o.length){
       console.log(false)
   }
  
}
xo(str);

