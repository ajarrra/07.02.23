function sum(a, b) {
    let result = a + b;
    console.log(result)
}
let m = sum(5, 5);


//другая форма
function sum(a, b) {
    console.log(a + b);
}
let n = sum(6, 6)


let myName = "Ajara";
console.log(myName.length); //сколько букв


//цикл который считает от 5 до 25
let number = 5;
while (number <= 25) {
    console.log(number);
    number++;
}

//отсчитать от 10 до -10 используя for
for (let v = 10; v >= -10; v--) {
    console.log(v);
}



//тема: МАССИВЫ
//(переменная которая хранит несколько значений (список))

let example1 = [];//нечего не содержит
let example2 = [3, 4, 1, 54, 33]; //состоит из 5 эл и эти эл явл числами

let example3 = ["Hello", 55, true, null]; //может содержать любые типы данных

let example4 = ["Ajara", "elya", "Nestana"];
let example5 = ["Chui", "Osh", "Issyk-Kul", "Talas", "Batken", "Jalal-Abad",]

console.log(example4);//что бы вывести массив
console.log(example4[0]);//что бы вывести определенный эл (отчет идет от нуля) 
console.log(example5[2]);

example4.push("Zina");//что бы добавить новый элемент в массив
console.log(example4);

example4.push("Lola");
example4.unshift("maiia");//добавляет с начала 
console.log(example4);


//вырезаем из массива
let name1 = example4.pop();;//вырез с конца
let name2 = example4.shift();// вырезать с начала
console.log(example4);

example4[0] = "Aika";//изменяем первый элемент 
console.log(example4);

//сколько эл находится в массиве
console.log(example4.length);


//как работать с массивами используя циклы

console.log("Hello , my name is " + example4[0]);
console.log("Hello, my name is  " + example4[1]);
console.log("Hello , my name is " + example4[2]);

for (let i = 0; i < example4.length; i++) { //можем вывести любой массив
    console.log("Hello, my name is " + example4[i]);
}

for (let i = 0; i < example5.length; i++) {
    console.log("My sity is " + example5[i] + "i live here");
}


//виды циклов:
for (let name of example4) {
    console.log("Hello, i am " + name); //чаще используется
}

for (let i in example4) {
    let name = example4[i];
    console.log("Hello , my name is " + name);
}

example4.forEach(function (name, i) {//для каждого эл массива выполняет функцию 
    console.log("Hello..." + name);
});

//деструктивный метод цикла
//while(example4.length > 0){
//  console.log (example4.pop());//меняет массив
//}


for (let i = 0; i < example4.length; i++) {
    console.log(example4[i].length);
}


//выводим имена большими буквами
for (let i = 0; i < example4.length; i++) {
    console.log(example4[i].toUpperCase());
}

let example6 = ["I", "love", "Karalol"];

let result = "";
for (let i = 0; i < example6.length; i++) {
    result = result + example6[i] + " ";
}
console.log(result);


//вывести сумму чисел 
let example7 = [54, 11, 44, 21, 3, 110];
let result1 = 0;
for (let i = 0; i < example7.length; i++) {
    result1 = result1 + example7[i];
}
console.log(result1)


let example10 = ["Koshoeva ", "Ajar", "Koshoevna"];
console.log(example10[2]);
console.log(example10[0]);
example10.push("Mambetacunovna");//добавить слово
console.log(example10);
example10.unshift("Ainura");//доб слово в начале
console.log(example10);
console.log(example10[0]);
let Mam = example10.pop();//вырез с концв
console.log(example10);
let ainura = example10.shift();//вырез сначала
console.log(example10);
example10[1] = "Ajara";//изменяет эл
console.log(example10);
console.log(example10.length);//скок элементов
console.log("my name is " + example10[1] );

for( let i = 0;  i < example10.length; i++ ){
    console.log ("hello my name is " + example10[0])
}
for (let name of example10) {
    console.log("Hello, i am " + name); //чаще используется
}


