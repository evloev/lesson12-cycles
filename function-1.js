/*
1 Напиши функцию, которая принимает массив из чисел и возвращает сумму его элементов.
*/
// function takeТumbers(numbers) {
//    let add = 0;
//   for (let i = 0; i < numbers.length; i++) {
//    add += numbers[i]
  
// }
// return add
// }
// console.log(takeТumbers([1, 2, 3, 4]));


/*
2 Напиши функцию, которая принимает массив из чисел и возвращает сумму только положительных элементов.
*/
// function takeТumbers(number) {
//    let add =  0;
//    for(let i = 0; i < number.length; i++) {
//       if(number[i] > 0) {
//          add += number[i]
//       }
//    }
//    return add
// }
// console.log(takeТumbers([1,2,-3,5]))

/* 
3 Напиши функцию, которая принимает массив из названий языков программирования.
Она должна возвращает названия тех элементов, длина которых больше трёх символов.
*/

// function massivNumber (number) {
//    let add = [];
//    for(let i = 0; i < number.length; i++){
//       if(number[i].length > 3)
//       add.push(number[i])
//    }
//    return add

// }
// console.log(massivNumber(['c++','c#','Java','Kotlin','swift','flutter','php','JavaScrip','python','Delphi']))


/*
4 Напиши функцию, которая принимает массив из имен.
 Функция должна вернуть новый массив с именами, которые начинаются либо на "а" либо на "у".
    */
   // function myName (names) {
   //    let add = [];
   //    for(let i = 0; i < names.length; i++) {
   //       if(names[i][0] === 'a' || names[i][0] === 'u') {
   //        add.push(names[i])
   //       }
         
   //    }
   //    return add
   // }
   // console.log(myName(['adam','aslan','umar','sali','abdullah','ahmad','usman','alvi','rizvan','charli']))

   /* 
   Допиши функцию deleteMessages так, чтобы она вовзращала новый массив,
    из которого удалены все объекты с ключами deleted равными true.
   */

   //  function deleteMessages(array) {
   //    let arr = [];
   //    for(let i = 0; i < array.length; i++){
   //       if(array[i].deleted !== true ){
   //          arr.push(array[i])
   //       }
   //    }

   //          return arr
   //  }
    
   //  const messages = [
   //   { text: 'hello', deleted: true },
   //   { text: 'bue', deleted: false },
   //   { text: 'js is a beauty', deleted: false },
   //   { text: 'pair programming', deleted: true },
   //   { text: 'this is my horse', deleted: false },
   //  ];
    
   //  console.log(deleteMessages(messages))