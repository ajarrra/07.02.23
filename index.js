function  sum(a,b ){
 let result = a + b;
 console.log(result)   
}
let m = sum(5,5);
  

//другая форма
function sum(a,b){
    console.log (a + b);
}
let n = sum (6,6)


let myName = "Ajara";
console.log(myName.length); //сколько букв


//цикл который считает от 5 до 25
let number = 5;
while (number <= 25){
    console.log (number);
    number++;
}

//отсчитать от 10 до -10 используя for
for (let v = 10 ; v >= -10; v--){
    console.log (v);
}



//тема: МАССИВЫ
//(переменная которая хранит несколько значений (список))

let example1 = [];//нечего не содержит
let example2 = [3, 4 , 1 , 54 , 33]; //состоит из 5 эл и эти эл явл числами

let example3 = ["Hello" , 55 , true, null]; //может содержать любые типы данных

let example4 = ["Ajara" , " elya" , "Nestana"];
let example5 = ["Chui","Osh","Issyk-Kul","Talas","Batken","Jalal-Abad", ]

console.log (example4);//что бы вывести массив
console.log(example4[0]);//что бы вывести определенный эл (отчет идет от нуля) 
console.log (example5[2]);

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

for (let i = 0; i < example4.length ; i++){ //можем вывести любой массив
    console.log("Hello, my name is " + example4[i] ); 
}

for (let i = 0 ; i < example5.length ; i++){
    console.log ("My sity is " + example5[i]  + "i live here");
}


//виды циклов:
for (let name of example4){
    console.log ("Hello, i am " + name); //чаще используется
}

for(let i in example4){
    let name = example4[i];
    console.log("Hello , my name is " + name);
}

example4.forEach(function (name, i){//для каждого эл массива выполняет функцию 
    console.log("Hello..." + name);
}) ;

//деструктивный метод цикла
while(example4.length > 0){
    console.log (example4.pop());//меняет массив
}







