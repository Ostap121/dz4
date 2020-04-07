// // - створити функцію яка виводить масив
// function outputArray(array) {
//     console.log(array);
// }
// outputArray( [10, true, 'test']);
//
// // - створити функцію яка заповнює масив рандомними числами та виводить його.
// // Для виведення використати попвередню функцію.
//
// function getArrRand() {
//     let arr =[];
//     for (let i = 0; i < 10 ; i++) {
//         arr[i] = Math.round(Math.random()*50);
//     }
//     outputArray(arr);
// }
// getArrRand();
// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function getMinNumber(a,b,c) {
//     if ( a < b && a < c){
//         return a;
//     }else if (b < a && b < c){
//         return b;
//     }else if (c < a && c <b){
//         return c;
//     }
// }
// console.log(getMinNumber(85,20,50));
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function getMaxNumber(a,b,c) {
//     if ( a > b && a > c){
//         return a;
//     }else if (b > a && b > c){
//         return b;
//     }else if (c > a && c > b){
//         return c;
//     }
// }
// console.log(getMaxNumber(85,320,750));
//
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function getMinPrintMax() {
//     console.log('Max: ' + Math.max(...[...arguments]));
//     return Math.min(...[...arguments]);
// }
// let minNumber = getMinPrintMax(1,2,45,6,8,9);
// console.log('Min: ' + minNumber);
//
// // - створити функцію яка виводить масив
// function printArr(array) {
//     console.log(array)
// }
// printArr([10, 'test', 7 , true]);
//
// // - створити функцію яка повертає найбільше число з масиву
// function getMaxNumber(array) {
//     return Math.max(...array);
// }
//
// console.log(printMaxNumber([777,88,202]));
//
// // - створити функцію яка повертає найменьше число з масиву
// function getMinNumber(array) {
//     return Math.min(...array)
// }
//
// console.log(getMinNumber([257,60,125]));
//
// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function getSumArr(array) {
//     let sum =0;
//     for (const argument of array) {
//         sum = sum + argument
//     }
//     console.log(sum);
//     return sum
//
// }
// getSumArr([10,5,20,5,10]);
//
//
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function getSeredneArr(array) {
//     let sum = 0;
//     let seredne;
//     for (const argument of array) {
//         sum = sum + argument;
//        seredne = sum  / array.length
//     }
//     console.log(seredne);
//     return seredne
//
// }
// getSeredneArr([60,20,10,10]);
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function countObjInArr(array) {
//     let count = 0;
//     for (const arrayElement of array) {
//         if (typeof arrayElement === 'object'){
//             count = count + 1;
//         }
//     }
//     console.log(count);
//     return count
// }
// countObjInArr([ {}, {}, {}, {}, 1, true ]);
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function countObjInArr(array) {
//     let count = 0;
//     for (const arrayElement of array) {
//         if (typeof arrayElement === 'object'){
//             count = count + Object.keys(arrayElement).length;
//         }
//     }
//     console.log(count);
//     return count
// }
// countObjInArr([ {user:1}, {user:2, age:32}, {user:4}, {user:5, age: 20} ]);
//
// //// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //   Приклад
// //    [1,2,3,4]
// //    [2,3,4,5]
// //  результат
// //    [3,5,7,9]
//
// function sumIndexArray(array1, array2) {
//     let array3 = [];
//     for (let i = 0; i < array1.length; i++) {
//         array3.push(array1[i] + array2[i])
//     }
//     return array3
// }
//
// console.log(sumIndexArray([5,6,3], [1,2,3]));
//
// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// function indexReplace(array, i) {
//     let temp = array[i];
//     array[i] = array[i+1];
//     array[i+1] = temp;
//
//     return array
// }
// console.log(indexReplace([1,2,3,4], 2));
//
// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
//
//
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// function addDivWithTextInBody() {
//     let divka = document.createElement('div');
//     divka.innerText = 'Hello owu';
//     document.body.appendChild(divka)
// }
// addDivWithTextInBody();
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addTag(Tag, text) {
//     const tag = document.createElement(Tag);
//     tag.innerText = text;
//     document.body.appendChild(tag);
// }
//
// addTag('div',"Hello Viktor");
//
// // - приймає масив автомобілів (можна взяти з попередніх дз ),
// // та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let car = [
//     {marka:'opel', model:'corca', type:'hech', color:'silver', paluvo:'benzun', },
//     {marka:'peugeot', model:'3008', type:'crosover', color:'black', paluvo:'disel', },
//     {marka:'seat', model:'cordoba', type:'sedan', color:'brown', paluvo:'benzun', },
//     {marka:'bmw', model:'535', type:'coupe', color:'white', paluvo:'benzun', },
//     {marka:'opel', model:'vectra', type:'sw', color:'blue', paluvo:'gaz/benzun', }
// ];
// function getListElementArr(array, id) {
//     let divka = document.createElement('div');
//     divka.id = 'divkaId';
//     let uelka = document.createElement('ul');
//     divka.appendChild(uelka);
//     document.body.appendChild(divka);
//
//     for (let i = 0; i < car.length; i++) {
//         let lishka = document.createElement('li');
//         uelka.appendChild(lishka);
//         const cars = array[i];
//         lishka.innerText = `Marka: ${cars.marka}, Model: ${cars.model}, Type: ${cars.type},
//         Color: ${cars.color}, Paluvo: ${cars.paluvo} `
//     }
// }
// getListElementArr(car, 'divkaId');
//
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// // Всі властивості авто в обному блоці
// function getElementsArr(array,id) {
//     let mainDivka = document.createElement('div');
//     mainDivka.id = 'mainDivkaId';
//     for (let i = 0; i < car.length; i++) {
//         const carElement = car[i];
//         let divka = document.createElement('divka');
//         divka.innerText = `Marka: ${carElement.marka}, Model: ${carElement.model}, Type: ${carElement.type}, Color: ${carElement.color}, Paluvo: ${carElement.paluvo} `;
//         divka.style.paddingRight = '100%';
//         mainDivka.appendChild(divka);
//
//
//     }
//     document.body.appendChild(mainDivka);
//
// }
// getElementsArr(car,'mainDivkaId');
//
// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто
// // з відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.
// //     Приклад масивів:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
// let  newArr = [];
// function getNewArrWithElement(array1,array2,array3) {
//      for (const users of usersWithId) {
//             for (const cities of citiesWithId) {
//                 if (users.id === cities.user_id){
//                  users.address = cities;
//                  array3.push(users);
//                  }
//              }
//     }
// }
// getNewArrWithElement(usersWithId,citiesWithId,newArr);
// console.log(newArr);