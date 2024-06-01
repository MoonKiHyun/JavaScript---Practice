// 동기, 비동기

// setTimeout
function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {
    
        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0)
}
console.log('작업 시작');
work((time) => {
    console.log('작업이 끝났습니다.')
    console.log(time + 'ms가 걸렸습니다.')
});
console.log('다음 작업');

// Promise : setTimeout을 사용할 경우 callback 함수로 처리할 때 비동기 작업이 많으면 코드가 난잡해 지는 단점이 있음

// callback 함수가 많을 경우 setTime을 사용했을 때 [콜백 지옥]
function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000)
}

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!')
                });
            })
        })
    })
});

// Promise 사용 시
function increaseAndPrint02(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value ===5) {
                const error = new Error();
                error.name = 'ValueFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000)
    })
}

increaseAndPrint02(0).then(n => {
    console.log('result', n);
})

// Promise를 사용해 5까지 출력
increaseAndPrint02(0).then(n => {
    return increaseAndPrint02(n);
}).then(n => {
    return increaseAndPrint02(n);
}).then(n => {
    return increaseAndPrint02(n);
}).then(n => {
    return increaseAndPrint02(n);
}).then(n => {
    return increaseAndPrint02(n);
});

// 더 간편하게
// 문제 : 

/**
 * 더 간편한 코드
 * 
 * 문제점
 * 1. Error를 잡을 때 어느 부분에서 Error가 발생하는지 찾기 어려움, 
 * 2. 특정 조건에 따라 분기를 나누기가 어려움, 
 * 3. 특정 값을 공유해가며 작업을 하기가 어려움
 */
increaseAndPrint02(0)
.then(increaseAndPrint02)
.then(increaseAndPrint02)
.then(increaseAndPrint02)
.then(increaseAndPrint02)
.then(increaseAndPrint02)
.catch(e => {
    console.error(e);
})