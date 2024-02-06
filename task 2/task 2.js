'use strict';
//Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. 
function getRandomNum (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let grades = [];
for(let i = 1; i <= 12; i++){
    let randomnumber = getRandomNum(1,100);
    grades.push(randomnumber);
}
console.log(grades);
//Рассчитайте и выведите средний балл студентов, используя методы массивов.
let averageGrade = 0;
grades.forEach((grade) =>{
    return averageGrade += grade;
})
averageGrade /= grades.length;
console.log(averageGrade);
//Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
let sortGrades = grades.sort((a,b) => {
    return a - b;
})
console.log(sortGrades);
let maxGrade = sortGrades.at(-1);
console.log(maxGrade)
//Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
let minGrade = sortGrades[0];
console.log(minGrade);
//Посчитайте и выведите количество студентов, получивших положительную оценку 
// function sort (value){
//     return value >= 60;
// }
// let positiveAssessment = grades.filter(sort)
let positiveAssessment = grades.filter((grade) =>{
    return grade >= 60;
})
console.log(positiveAssessment);
console.log(positiveAssessment.length);
//Посчитайте и выведите количество студентов, получивших отрицательную оценку 
let negativeAssessment = grades.filter((grade) =>{
    return grade < 60
});
console.log(negativeAssessment);
console.log(negativeAssessment.length);
// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E
//     - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//     - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//     - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//     - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//     - Если оценка ниже 20, преобразуйте её в "E"
let gradeInStr = grades.map((grade) =>{
    if(grade >= 80) return grade = 'A';
    if(grade >= 60 && grade <= 79) return grade = 'B';
    if(grade >= 40 && grade <= 59) return grade = 'C';
    if(grade >= 20 && grade <= 39) return grade = 'D';
    if(grade < 20) return grade = 'E';
})
console.log(gradeInStr)