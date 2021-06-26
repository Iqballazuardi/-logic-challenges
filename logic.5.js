function obj(a) {
    var num = 0
    for (i = 0; i < a.length; i++) {
        var nama = ''

        var jek = {
            firstName: '',
            lastName: '',
            gender: 0,
            age: 0
        }
        var z = a[i]
        for (j = 0; j < z.length; j++) {
            if (j == 0) {
                nama = `${num += 1}. ${z[j]}`
                jek.firstName = z[j]
                num = 1
            } else if (j == 1) {
                nama += ` ${z[j]}`
                jek.lastName = z[j]
            } else if (j == 2) {

                jek.gender = z[j]
            } else if (j == 3) {
                if (z[j] > 2021 || z[j] == 0) {
                    jek.age = 'invalid birth years'
                } else {
                    jek.age = 2021 - z[j]
                }
            }
        }console.log(nama)
        console.log( jek)
    }

}
(obj([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male', 0]]));


function shoppingTime(id,money){
    var sisaUang = 0
    var barang = [
        ['sepatu  scattu', 1500000 ],
        ['baju Zoro', 500000],
        ['baju H&N', 250000],
        ['sweater uniqlo', 175000],
        ['casing hp',50000]
    ]
    var hasil = {
        memberID:'',
        uang:0,
        diBeli:[],
        kembalian:0

    }
    if(id == null || id == ''){
        return 'toko ini hanya untuk member'
    } else if (money <= 50000 ){
        return 'maaf uang anda tidak cukup'
    }else if(id && money){
        hasil.memberID = id
        hasil.uang += money
    }
    for(i = 0;i<barang.length;i++){
        if(money >= barang[i][1]){
            hasil.diBeli.push(barang[i][0])
            money= money - barang[i][1]
            sisaUang = money
        }

    }
    hasil.kembalian = sisaUang
    return hasil
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000))
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


function hitung(pembeli) {
    var sepatu = 0
        var baju = 0
        var sweater = 0
    var listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ]
    var hasil = [{
            product: 'Sepatu stacattu',
            shoppers: [],
            sisaBarang: 0,
            totalProfit: 0
        },
        {
            product: 'Baju Zoro',
            shoppers: [],
            sisaBarang: 0,
            totalProfit: 0
        },
        {
            product: 'Sweater Uniklooh',
            shoppers: [],
            sisaBarang: 0,
            totalProfit: 0
        }
    ]
    for (i = 0; i < pembeli.length; i++) {
        
        if (pembeli[i].product == listBarang[0][0] && pembeli[i].amount + sepatu <= listBarang[0][2]) {          
                sepatu += pembeli[i].amount  
                hasil[0].shoppers.push(pembeli[i].name)
                hasil[0].totalProfit = listBarang[0][1] * sepatu
                hasil[0].sisaBarang = listBarang[0][2] - sepatu   
        } else if (pembeli[i].product == listBarang[1][0]&& pembeli[i].amount + baju <= listBarang[0][2]) {
           
                baju += pembeli[i].amount
                hasil[1].shoppers.push(pembeli[i].name)
                hasil[1].totalProfit = listBarang[1][1] * baju
                hasil[1].sisaBarang = listBarang[1][2] - baju
            
        } else if (pembeli[i].product == listBarang[2][0] && pembeli[i].amount + sweater <= listBarang[0][2]) {
       
                sweater += pembeli[i].amount
                hasil[2].shoppers.push(pembeli[i].name)
                hasil[2].totalProfit = listBarang[2][1] * sweater
                hasil[2].sisaBarang = listBarang[2][2] - sweater
            
        }

    }
    // console.log(pembeli[0].product)
    // console.log(listBarang[0][0])
    // console.log(pembeli.length)
    return hasil
}
console.log(hitung([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));

console.log(hitung([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
console.log(hitung([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
