// ***논리 연산자 순서 : not - and - or***


// "==", "!="와 "===", "!=="가 다른점 : 타입 비교의 유무


// 블록 내부에서 같은 이름의 상수를 정의했다.
const a = 1;
if (a + 1 === 2) {
	const a = 2;
	console.log("if문 안의 a값은 " + a);
}
console.log("if문 밖의 a값은 " + a);


// switch문
const device = "iphone";
switch (device) {
    case "iphone":
        console.log("아이폰입니다.");
        break;
    case "ipad":
        console.log("아이패드입니다.");
        break;
    default:
        console.log("잘 모르겠습니다.")
}


// ***화살표 함수***
const add1 = (a, b) => a + b;
console.log(add1(1,2));

const add2 = (a, b) => {
    return a + b;
}
console.log(add2(1,2));


// ***비구조화할당[객체 구조분해]***
const ironMan = {
    name: "토니 스타크",
    actor: "로버트 다우니 주니어",
    alias: "아이언맨"
}

const captainAmerica = {
    name: "스티블 로저스",
    actor: "크리스 에반스",
    alias: "캡틴 아메리카"
}

// 방법 1
function print01(hero) {
    const text = `${hero.name}(${hero.alias}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}

// 방법 2
function print02(hero) {
    const {name, actor, alias} = hero;
    const text = `${name}(${alias}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

// 방법 3
function print03({name, alias, actor}) {
    const text = `${name}(${alias}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print01(ironMan);
print02(ironMan);
print03(ironMan);


// ***this***
// this는 자신이 속해있는 곳을 가리킨다.
// 화살표 함수로 사용하게 되면 화살표 함수 내부에서는 this가 무엇을 가리키는지 모름.
// 만든 함수를 바깥으로 꺼낼 시 this와의 관계가 사라짐.
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say() {
        console.log(this.sound);     
    }
}
const cat = {
    name: '야옹이',
    sound: '야옹!',
}

cat.say = dog.say;
cat.say(); // 야옹!
const catSay = cat.say;
catSay(); // undefined - 연결되어있는 this가 없다.


// getter, setter
const dog1 = {
    _name: "멍멍이",
    get name() {
        console.log("_name을 조회합니다...");
        return this._name;
    },
    set name(value) {
        console.log("이름을 변경합니다...");
        this._name = value;
    }
}

dog1.name;
dog1.name = '뭉뭉이';
console.log(dog1._name);

const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log("calculate...")
        this.sum = this._a + this._b;
    },
    get a() {
        console.log("a를 조회합니다.")
        return this._a;
    },
    get b() {
        console.log("b를 조회합니다.")
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}
console.log(numbers.sum);
numbers.a;


// 반복문
const arr = [1,2,3,4,5,6,"String", {name: "ans", age:30}];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

function sumOf(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1,2,3,4,5]);
console.log(result);

const newArr = [1,2,3,4,5,6,7].filter((number) => number > 3);
console.log(newArr);