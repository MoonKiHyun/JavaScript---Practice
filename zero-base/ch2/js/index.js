// 3항 연산자
const array01 = [1,2];
const text = array01.length===0 
    ? "배열이 비어있습니다" 
    : "배열이 비어있지 않습니다.";
console.log(text);

// truthly : 조건문에서 true로 평가되는 값 Ex) falsy한 값을 제외한 모든 값
// falsy : 조건문에서 false로 평가되는 값 Ex) undefined, null, 0, '', NaN
function print(person) {
    if (!person) {
        return ;
    }
    console.log(person.name);
}

const truthy = {a: 5};
const falsy = null;

console.log(!!truthy);  // true
console.log(!!falsy);   // false


// 단축 평가 논리 계산법
const dog01 = {
    name: '멍멍이'
}

function getName(animal) {
    if (animal) {
        return animal.name;
    }
    return undefined;
}

function getName01(animal) {
    return animal && animal.name;
}

const name01 = getName(dog01);
console.log(name);

// 원리
// && : 앞 부분이 truthy한 값이면 뒤쪽 값이 리턴, falsy한 값이면 그 값(앞쪽 값)이 리턴된다.
// || : 앞 부분이 falsy한 값이면 뒤쪽 값이 리턴, truthy한 값이면 그 값(앞쪽 값)이 리턴된다.
console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log('' && 'hello');
console.log(0 && 'hello');
console.log(1 && 'hello');

const object = {name: 'ansrlgus'};

const name02 = object && object.name;
console.log(name02);


//
const namelessDog = {
    name: ''
};

function getName03(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.'
}

const name03 = getName03(namelessDog);
console.log(name03);

// 함수의 기본 파라미터
function calculateCircleArea01(r = 1) {  // 파라미터에 값이 들어오지 않을 경우 기본값을 1로 한다는 의미
    return Math.PI * r * r;
}

const calculateCircleArea02 = (r = 1) => {
    return Math.PI * r * r;
}

const area01 = calculateCircleArea01();
const area02 = calculateCircleArea02();
console.log(area01);
console.log(area02);


//
function isAnimal01(text) {
    const animal = ['고양이', '개', '거북이', '너구리'];
    return animal.includes(text);
}

const isAnimal02 = text => ['고양이', '개', '거북이', '너구리'].includes(text);

console.log(isAnimal01('개'));
console.log(isAnimal02('개'));

//
function getSound(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        참새: '짹짹',
        비둘기: '구 구구구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('사람'));

//
function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기: function() {
            console.log('구 구구');
        }
    }
    
    const task = tasks[animal];
    if (!task) {
        console.log('...?');
        return;
    }
    task();
}

makeSound('개');


// 비구조화 할당 [구조 분해]
const object01 = { a: 1} 

function print({a, b = 2}) {
    console.log(a);
    console.log(b);
}
print(object01);

const {a, b = 2} = object01; // object에 b의 속성이 없을 경우 기본값을 2로 설정
console.log(a);
console.log(b);


//
const animal03 = { 
    name: '멍멍이',
    type: '개'
};

const {name: nickname} = animal03;
console.log(nickname);


// 배열 비구조화 할당
const array02 = [1,2]

const [one, two, three = 3] = array02;
console.log(one);
console.log(two);
console.log(three);


//
const deepObject01 = {
    state: {
        information: {
            name04: 'velopert',
            language: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};

const {name04, language} = deepObject01.state.information;
const {value} = deepObject01.value;

const extracted = { // 특정 키 이름으로 선언된 값이 있다면 value 값을 정하는걸 생랙헤도 된다.
    name04,
    language,
    value
};

console.log(extracted);


// spread
const slime = {
    name05: '슬라임'
}

const cuteSilme = {
    ...slime,
    attribute: 'cute'
}

const purpleCuteSilme = {
    ...cuteSilme,
    color: 'purple'
}

const greenCuteSilme = {
    ...cuteSilme,
    color: 'green' // purple을 덮어 쓴다
}

console.log(slime);
console.log(cuteSilme);
console.log(purpleCuteSilme);
console.log(greenCuteSilme);

//
const animal02 = ['개', '고양이', '비둘기'];
const anotherAnimal = [...animal02, '닭', ...animal02];
const animal04 = animal02.concat(123); // concat은 배열만 합칠 수 있는게 아니라, 배열에 다른 타입의 값도 추가할 수 있구나!!
console.log(animal04)

console.log(anotherAnimal);

// rest
const {color, ...rest01} = purpleCuteSilme;
console.log(color);
console.log(rest01);

const {attribute, ...rest02} = cuteSilme;
console.log(rest02);
console.log(attribute);

// 배열에서 rest는 맨 마지막에 와야 한다.
const numbers01 = [0,1,2,3,4,5,6];
const [one01, two01, ...rest03] = numbers01;
console.log(one01);
console.log(two01);
console.log(rest03)

// 함수 파라미터에서 spread
function sum01(...rest04) { // 입력된 모든 파라미터를 하나의 배열로 받아온다.
    return rest04.reduce((acc, current) => acc + current, 0)
}
console.log(sum01(1,2,3,4,5,6,7,8))

// 파라미터 : 함수에서 받아오는 값
// 인자 : 함수를 사용할 때 넣어주는 값

// 함수 인자에서 spread
const numbers02 =[1,2,3,4,5,6,7];
console.log(sum01(...numbers02));

// 문제 : 함수 n개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 반환하시오
function max(...rest05) {
    return rest05.reduce((acc, current) => {
        return (acc < current) ? current : acc
    }, -Infinity) // 모든 입력 값이 음수인 경우에도 찾을 수 있다.
}

const result = max(1,2,3,4,5,6,10,2,3,4,9);
console.log(result);


// Scope
const value01 = 'value01';

function myFunction() {
    console.log('myFunction: ');
    console.log(value01);
}

function otherFunction() {
    console.log('otherFunction: ');
    const value01 = 'value02'
    const anotherValue = 'value03'
    console.log(value01);

    function functionInside() {
        console.log('functionInside: ');
        console.log(value01);
        console.log(anotherValue);
    }
}
myFunction();     // value01
otherFunction();  // value02

console.log('global scope: ');
console.log(value01);       // value01
//console.log(anotherValue) // ReferenceError: anotherValue is not defined


// Block Scope
function myFunction01() {
    const value01 = 'bye';
    if(true) {
        const value01 = 'world';
        console.log('block scope')
        console.log(value01);
    
    }
    console.log('function scope: ');
    console.log(value01);
}

myFunction01();
console.log('global scope: ');  
console.log(value01);           // value01


// Hoisting : 자바스크립트의 기본 동작 중 하나로, 변수와 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상 
// const, let은 hoisting이 발생하지 않는다.

hoistingFunction(); // 잘 작동 한다. 그러나 이해하기가 힘들기 때문에 최대한 피하자.
console.log(a10);   // 초기화만 되어있고 값이 할당되어 있지 않은 상태이기 때문에 undefined가 발생한다.

function hoistingFunction() {
   console.log('hoisting!!') 
}

var a10 = 'a';