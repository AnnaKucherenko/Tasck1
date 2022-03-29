const password = "bac"

const allowedChars = ['a', 'b', 'c'];
const maxLength = 3;

// for (let i = 1; i <= maxLength; i += 1){
//     let array = [];
//     for (let j = 0; j < i; j += 1){
//         array[j] = 0;
//     }
//     // console.log(array);
//     for (let i = array.length - 1; i >= 0; i--) {
//         array[array.length - 1] = 0;
//         array[i] = array[i] + 1;
//         console.log(array);
//         array[array.length - 1] = array[array.length - 1] + 1;
       
//         console.log(array);
        
//     }
// }

// способ приведение букв к цифрам мне менее понятен, поєтому попробівала с буквами,
// но тоже до конца не получилось. Правильно работает только  при maxLength=3,если
// maxLength=2 то будет повторение комбинаций, если  maxLength=4, то не учтет все возможные
// вместо console.log(array) нужно поставить приведение массива к строке и сравнить ее с паролем
// этот метод можно усовершенствовать рекурсией, вызывая вместо вложеных for (let el of arr) 
// функцию choiceOfPasswords(allowedChars) но я уже не стала этого делать, так как метод все равно
//  не конца правильно работает. Это самое близкое что у меня получилось.

function choiceOfPasswords(arr) {
    
    for (let el of arr){
        let array = [];
        // if (array.length > maxLength) {
        //     return
        // } else {}
            array.push(el);
            console.log(array)
        
            for (let i = 0; i < arr.length; i += 1){
                array.push(arr[i]);
                if (array.length < maxLength) {
                    for (let el of arr) {
                        array[array.length - 1] = el;
                        console.log(array);
                        
                    }
                } if (array.length === maxLength) {
                            for (let el of arr) {
                                array[array.length - 2] = el;

                                for (let el of arr) {
                                    array[array.length - 1] = el;
                                    console.log(array);
                                }
                            }
                    } 
            } 
    }
}

choiceOfPasswords(allowedChars)

// function login(password) {
// 	return password === "bac";
// }




// let newarray = [];

// // Цикл подбора пароля из одного символа
// for (let i = 0; i < allowedChars.length; i += 1){
//     newarray.push(i);
//     console.log(newarray);
    
//     newarray = [];
// }

// // Цикл подбора пароля из двух символа
// for (let i = 0; i < allowedChars.length; i += 1){
//     newarray.push(i);
//     if (i === 1) {
//         newarray.push(i - 1);
//     } else if (i === 2) {newarray.push(i - 2); } else{newarray.push(i);}
    
//     console.log(newarray);
//     for (let j = 0; j < newarray.length; j += 1){
//         let element2 = newarray[newarray.length - 1] + 1;
//         newarray[newarray.length - 1] = element2;
//         console.log(element2)
//         console.log(newarray)
//     }
//     newarray = [];
// }

// // Цикл подбора пароля из трех символа
// for (let i = 0; i < allowedChars.length; i += 1){
//     newarray.push(i);
//     if (i === 1) {
//         newarray.push(i - 1);
//         newarray.push(i - 1);
//     } else if (i === 2) {
//         newarray.push(i - 2);
//         newarray.push(i - 2);
//     } else {
//         newarray.push(i);
//         newarray.push(i);
//     }
//     console.log(newarray);
//     for (let j = 0; j < newarray.length - 1; j += 1){
//         let element3 = newarray[newarray.length - 1]+1;
//         console.log(element3)
//         newarray[newarray.length - 1] = element3;
//         console.log(newarray)
//     }
//     console.log(newarray)

//     for (let j = 0; j < newarray.length - 1; j += 1){
//         let element2 = newarray[1] + 1;
//         newarray[1] = element2;
//         console.log(newarray)
        
//     }
//     newarray = [];
// }


 


// проверка на совпадение строки с паролем при  помощи цикла

// const string = "bac"
// const password = "bac"

// function stringIsAPassword(string) {
//     if (string.length !== password.length) {
//         return console.log("Длина введенного пароля не совпадает");
//     } else {
//         const arrayOfStringLetters = string.split("");
//         const arrayOfPasswordLetters = password.split("");
//         let str = "";
//         for (let i = 0; i < arrayOfStringLetters.length; i += 1) {

//             for (let j = 0; j < arrayOfPasswordLetters.length; i += 1) {
//                 if (i === 0) {
//                     if (arrayOfStringLetters[i] !== arrayOfPasswordLetters[j]) {
//                         return console.log("Пароль не совпадает");
//                     }
//                     str = str + arrayOfStringLetters[i];
//                 } else if (i > 0) {
//                     for (let j = i; j < arrayOfPasswordLetters.length; i += 1) {
//                         console.log(`ай = ${i}`)
//                         console.log(`йот = ${j}`)
//                         if (arrayOfStringLetters[i] !== arrayOfPasswordLetters[j]) {
//                             return console.log("Пароль не совпадает");

//                         } else {
//                             str = str + arrayOfStringLetters[i];
//                             console.log(`строка ${str}`);
//                             break;
//                         }

//                     }

//                 }

//             }
//             // return console.log(`Наш пароль ${str}`);

//         }
//         // console.log(str)

//     }

// } 


// stringIsAPassword("ba");
// stringIsAPassword("aac");
// stringIsAPassword("baa");
// stringIsAPassword("bac");






