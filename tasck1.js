const string = "bac"
const password = "bac"

function stringIsAPassword(string) {
    if (string.length !== password.length) {
        return console.log("Длина введенного пароля не совпадает");
    } else {
        const arrayOfStringLetters = string.split("");
        const arrayOfPasswordLetters = password.split("");
        let str = "";
        for (let i = 0; i < arrayOfStringLetters.length; i += 1) {
            
            for (let j = 0; j < arrayOfPasswordLetters.length; i += 1) {
                if (i === 0) {
                    if (arrayOfStringLetters[i] !== arrayOfPasswordLetters[j]) {
                        return console.log("Пароль не совпадает");
                    }
                    str = str + arrayOfStringLetters[i];
                } else if (i > 0) {
                    for (let j = i; j < arrayOfPasswordLetters.length; i += 1) {
                        console.log(`ай = ${i}`)
                        console.log(`йот = ${j}`)
                        if (arrayOfStringLetters[i] !== arrayOfPasswordLetters[j]) {
                            return console.log("Пароль не совпадает");
                            
                        } else {
                            str = str + arrayOfStringLetters[i];
                            console.log(`строка ${str}`);
                            break;
                        }
                        
                    }
                
                }
                
            }
            // return console.log(`Наш пароль ${str}`);
            
        }
        // console.log(str)
        
    }
    
} 


stringIsAPassword("ba");
stringIsAPassword("aac");
stringIsAPassword("baa");
stringIsAPassword("bac");



// const allowedChars = ['a', 'b', 'c'];
// const string1 = allowedChars.join('');
// let newarray = [];
// for (let i = 0; i < allowedChars.length; i += 1){
//     newarray.push(allowedChars[0]);
//     console.log(newarray)
// }
 


// let str = "";
// const maxLength = 3;








// for (let i = 0; i < allowedChars.length; i += 1){
//     str = str + allowedChars[0];
    
//     console.log(str)
//     // if (str === password) {
//     //     console.log(`Пароль ${string}`);
//     // } else {
//     //     console.log(`Пароль  не верен`);
//     // }
    
// }



// for (let i = 0; i < allowedChars.length; i += 1){
//     str = str + allowedChars[0];
//     // if (str === password) {
//     //     console.log(`Пароль ${string}`);
//     // } else {
//     //     console.log(`Пароль  не верен`);
//     // }
    
// }


// str = allowedChars[0];
// for (let i = 1; i < allowedChars.length; i += 1){
//     str = str + allowedChars[1];
//     console.log(str)
           
// }

// for (let i = 2; i <= allowedChars.length; i += 1){
            
//             str = str + allowedChars[2];
//             console.log(str)
// }

// console.log(str)



