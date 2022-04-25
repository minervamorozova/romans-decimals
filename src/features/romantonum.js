let allNumberTable = new Map();
let lessNumberTable = new Map();

allNumberTable.set("M", 1000).set("CM", 900).set("D", 500).set("CD", 400).set("C", 100).set("XC",90).set("L", 50).set("XL",40).set("X", 10).set("IX", 9).set("V", 5).set("IV", 4).set("I", 1)
lessNumberTable.set("IV", 4).set("IX", 9).set("XL",40).set("XC",90).set("CD", 400).set("CM", 900);

export let numberToRoman = (number) =>{
    let cache = "";
    allNumberTable.forEach(function(value, key){
        let checker = Math.floor(number/value);
        if(checker !==0){
            cache += key.repeat(checker);
        }
        number %= value;
        if(number === 0) return cache;
    })
    return cache;
}

export let romanToNumber = (string) =>{

    let cache = 0;

    for(let i = 0;i<string.length;i++){
        if(lessNumberTable.has(string[i]+string[i+1])){
            cache+=lessNumberTable.get(string[i]+string[i+1]);
            i++;
        }else{
            cache +=allNumberTable.get(string[i])
        }
    }
    return cache;
}

export let romanValidator = (string) =>{
    let arrayPointer = [0,0,0,0,0,0,0,0,0,0,0,0,0]

    for(let i = 0;i<string.length;i++){
        let couple = string[i]+string[i+1];
        if(lessNumberTable.has(string[i]+string[i+1])){
            if(allNumberTable.get(string[i]+string[i+1])<allNumberTable.get(string[i+2])){
                return false;
            }else{
                switch(allNumberTable.get(couple)){
                    case 900: arrayPointer[1] += 1
                              arrayPointer[2] += 1
                              arrayPointer[3] += 1
                              arrayPointer[4] += 3
                        break;
                    case 400: arrayPointer[3] += 1
                              arrayPointer[4] += 3
                        break;                
                    case 90: arrayPointer[5] += 1
                             arrayPointer[6] += 1
                             arrayPointer[7] += 1
                             arrayPointer[8] += 3
                        break;               
                    case 40: arrayPointer[7] += 1
                             arrayPointer[8] += 3
                        break;               
                    case 9: arrayPointer[9] += 1
                            arrayPointer[10] += 1
                            arrayPointer[11] += 1
                            arrayPointer[12] += 3
                        break;                
                    case 4: arrayPointer[11] += 1
                            arrayPointer[12] += 3
                        break;                
                }
                i++;
            }
        }else if (allNumberTable.has(string[i])){
            switch(allNumberTable.get(string[i])){
                case 1000: arrayPointer[0] += 1
                    break;                
                case 500: arrayPointer[2] += 1
                    break;                
                case 100: arrayPointer[4] += 1
                    break;                
                case 50: arrayPointer[6] += 1
                    break;                
                case 10: arrayPointer[8] += 1
                    break;                
                case 5: arrayPointer[10] += 1
                    break;                
                case 1: arrayPointer[11] += 1
                    break;
            }
        }else{
            return false;
        }
    }
    if(arrayPointer[0]<4 && arrayPointer[1]<2 &&arrayPointer[2]<2 &&arrayPointer[3]<2 &&arrayPointer[4]<4 &&arrayPointer[5]<2 &&arrayPointer[6]<2 &&arrayPointer[7]<2 &&arrayPointer[8]<4 && arrayPointer[9]<2 &&arrayPointer[10]<2 &&arrayPointer[11]<2 &&arrayPointer[12]<4){
        return true;
    }else{
        console.log("Invalid number")
        console.log(arrayPointer)
        return false;
    }
}
