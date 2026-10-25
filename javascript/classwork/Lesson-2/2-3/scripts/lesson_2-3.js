// let userID1 = 1;
// let user1Name = 'Yurii';
// let user1Age = 31;
//
// console.log(userID1,user1Name,user1Age);

let user1 = {
  id: 1,
  name : "Yurii",
  age : 31,
  skills: ['html', 'java','js']
};

//Ключі (or назви властивостей) / Keys (Property names) — це самі id, name, age.
// Значення / Values — це те, що знаходиться справа від двокрапки: 1, "Yurii", 31.
//Властивості / Properties — це пари «ключ: значення» загалом (наприклад, id: 1).

console.log(user1);
console.log(user1.id);
console.log(user1['age']);  //пишемо в лапках тому що це не змінна а Keys(ключ)
console.log(user1.skills)
console.log(user1.skills[2])
console.log(user1['skills']);