function angka(num){
    var array = [[],[],[]]

    for(i=0;i<num.length;i++){
        if(num[i] % 2 == 0){
        array[0].push(num[i]) 
        }
        if(num[i] % 2 == 1){
        array[1].push(num[i])
        }
        if(num[i] % 3 == 0){
            array[2].push(num[i])
        }

    
    }   return array
    
}
console.log(angka([1,2,6,9,5,3,5,8,5,3,5,8,4,2,5,7,9,9,6,4,2,1,3,5,7,5,12,43]))


function hewan(arr){
    var array = [];
    var huruf_1 = ""
    var index = 0
    arr.sort();

    for(var i=0;i<arr.length;i++){
        if(i == 0){

            huruf_1 = arr[i][0]
            array.push([arr[i]])

        }else if(huruf_1 == arr[i][0]){

            array[index].push(arr[i])

        }else{

            huruf_1 = arr[i][0]
            array.push([arr[i]])
            index += 1
            
        }
    }
    return array

}console.log(hewan(['babi','domba','burung','cacing', 'ayam', 'kuda', 'anoa', 'kancil']))



function xox(arr){
    var jarakSpasi = 0
    var karakter = ''
    var simpan = 0

    for(var i = 0;i < arr.length;i++){
        if((arr[i] == 'x' || arr[i] == 'o') && karakter == ''){
            karakter = arr[i]
        }
        else if((karakter == 'x' || karakter == 'o') && arr[i] == ' '){
            jarakSpasi += 1
        }
        else if(karakter != arr[i] && arr[i] !=' '){
            jarakSpasi += 1
            if(jarakSpasi > simpan){
                simpan = jarakSpasi
                jarakSpasi = 0
                break
            }
        }
        else if(karakter == arr[i]){
            jarakSpasi = 0
        }
    } 
    return simpan
}
console.log(xox([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(xox(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(xox(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(xox([' ', ' ', 'o', ' '])); // 0
console.log(xox([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log()