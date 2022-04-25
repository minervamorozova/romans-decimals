let string = "XXXXIV";
let intNumberTable = new Map();
let midNumberTable = new Map();
let lessNumberTable = new Map();
let allNumberTable = new Map();

allNumberTable.set("M", 1000).set("CM", 900).set("D", 500).set("CD", 400).set("C", 100).set("XC",90).set("L", 50).set("XL",40).set("X", 10).set("IX", 9).set("V", 5).set("IV", 4).set("I", 1)
intNumberTable.set("I", 1).set("C", 100).set("M", 1000);
midNumberTable.set("V", 5).set("L", 50).set("D", 500)
lessNumberTable.set("IV", 4).set("IX", 9).set("XL",40).set("XC",90).set("CD", 400).set("CM", 900)

console.log(intNumberTable)
console.log(midNumberTable)
console.log(lessNumberTable)
console.log(allNumberTable)

function roman(number){
    let sum = 0;
    for(let i = 0; i<number.length; i++){
        if(allNumberTable.get(number[i])<allNumberTable.get(number[i+1])){
            sum+= lessNumberTable.get(number[i]+ number[i+1]);
            i++;
        }else{
            sum += allNumberTable.get(number[i])
        }
    }
    return sum;
}

function romanValidator(number){
    let cache = 0;
    let arrayPointer = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i<number.length; i++){
        cache = allNumberTable.get(number[i]);
        let couple = number[i] + number [i+1];
        if(cache<allNumberTable.get(number[i+1]) && lessNumberTable.has(couple)){
            if(allNumberTable.get(couple)>allNumberTable.get(number[i+2])){
                console.log("Bad format");
                return false;
            }else{
                switch(allNumberTable.get(couple)){
                    case 900: arrayPointer[1] += 1
                        break;
                    case 400: arrayPointer[3] += 1
                        break;                
                    case 90: arrayPointer[5] += 1
                        break;               
                    case 40: arrayPointer[7] += 1
                        break;               
                    case 9: arrayPointer[9] += 1
                        break;                
                    case 4: arrayPointer[11] += 1
                        break;                
                }
                i++;
            }            
        }else{
            switch(allNumberTable.get(number[i])){
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
        }
    }
    if(arrayPointer[0]<4 && arrayPointer[1]<2 &&arrayPointer[2]<2 &&arrayPointer[3]<2 &&arrayPointer[4]<3 &&arrayPointer[5]<2 &&arrayPointer[6]<2 &&arrayPointer[7]<2 &&arrayPointer[8]<4 && arrayPointer[9]<2 &&arrayPointer[10]<2 &&arrayPointer[11]<2 &&arrayPointer[12]<4){
        roman(number) 
        return true;
    }else{
        console.log("Invalid number")
        return false;
    }
}

console.log(allNumberTable.values())
console.log(romanValidator(string));