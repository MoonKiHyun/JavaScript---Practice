// map : 기존 배열은 그대로
console.log("============================================================================================")
console.log("============================================================================================")
const array = [1,2,3,4,5,6,7,8];

const squared = array.map(n => n * n);
console.log(squared);

const heros = [
    {
        name: "아이언맨",
        age: 30
    },
    {
        name: "캡틴아메리카",
        age: 300
    },
]

const herosName = heros.map((hero) => hero.name);
console.log(herosName);

// indexOf, findIndex, find - 값이 -1일 경우 없는 값이라는 의미, 가장 먼저 찾은 값을 반환
const index = heros.findIndex((hero) => hero.name === "캡틴아메리카");
console.log(index);
const object = heros.find((hero) => hero.name === "캡틴아메리카");  // 해당 object를 반환
console.log(object);


// splice 기존 배열이 변경된다.
const numbers1 = [10,20,30,40];
const index1 = numbers1.indexOf(30);
console.log(numbers1.splice(index1,2)); // index 위치부터 2개를 지운다. 지운 값을 반환한다.
console.log(numbers1); // 기존 배열이 변경된다. [10, 20]

// slice 기존 배열이 변경되지 않는다.
const numbers2 = [10,20,30,40];
console.log(numbers2.slice(0,2)); // 0 인덱스부터 1 인덱스 전까지 자른다.

// shift 맨 앞에 원소를 하나씩 꺼낸다.
// unshift 가장 앞에 원소를 추가한다.

// push 맨 뒤에 원소를 추가한다.
// pop 맨 뒤 원소부터 하나씩 꺼낸다.

// concat - 기존 배열을 수정하지 않는다.
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr12 = arr1.concat(arr2);
console.log(arr12);
console.log([...arr1,...arr2]);

// join 배열을 하나의 문자로 만들어준다.
console.log(arr1.join());
console.log(arr1.join("|")); // 파라미터는 구분자

// reduce - 배열의 각 요소에 대해 콜백함수를 실행. 그 결과를 누적하여 하나의 값으로 반환
const sum1 = arr1.reduce((accumulator, current) => accumulator + current, 0);
//                      (accumulator, 현재 원소) => accumulator + 현재 원소, 초기 accumulator 값
const sum2 = arr1.reduce((accumulator, current, index, array) => accumulator + current, 0);
//                     ((accumulator, 각 원소, 해당원소의 인덱스, 배열 자신))
console.log(sum1); //6
console.log(sum2); //6

const avg = arr1.reduce((avgValue, current, index, array) => {
    if(index === array.length-1) {
        return (avgValue + current) / array.length;
    }
    return avgValue + current
}, 0)

console.log(avg);

const alphabets = [{'ab':1},'a','w','f','a','w','v','z',1,2,3,1,1,1];

const count = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});

console.log(count);

const test = {
    name: "문기현",
    age: 30,
    birth: 1995

}

console.log(test['birth'] + 1);

function countBiggerThanTen(numbers3) {
    const count = numbers3.reduce((acc, current, index, numbers3) => {
        if (current > 10) {
            return ++acc;
        } 
        return acc;
    }, 0);
    return count;
}

const count1 = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
console.log(count1);

// 객체
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

// prototype - 객체 생성자로 무언가 만들었을 때 객체들끼리 공유할 수 있는 것
Animal.prototype.say = function() {
    console.log(this.sound);
}

// 상속
function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog2 = new Dog('멍멍이', '멍멍');
const cat2 = new Cat('야옹이', '야옹');

dog2.say();
cat2.say();

// 클래스
class Animal1 {
    constructor(type, name,sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    say() {
        console.log(this.sound);
    }
}

const dog3 = new Animal1('멍멍이', '개이름', '멍멍!');
const cat3 = new Animal1('고양이', '고양이이름', '야옹!');

dog3.say();
cat3.say();

// 클래스 상속
class Dog4 extends Animal1 {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat4 extends Animal1 {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog4 = new Dog4('멍멍이4', '멍멍4');
const cat4 = new Cat4('고양이4', '야옹4');

dog4.say();
cat4.say();

// 클래스
class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }

    addBrand(brand) {
        this.brands.push(brand);
    }

    print() {
        console.log(`${this.name}을/를 파는 음식점들: `);
        console.log(`${this.brands.join(', ')}`);
    }
}

const pizza = new Food('피자');
const chicken = new Food('치킨');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');
chicken.addBrand('BBQ');
chicken.addBrand('BHC');

pizza.print();
chicken.print();