// useState 훅을 사용
import React, {useState, useReducer} from "react";

// reducer 함수
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: 
            throw new Error('Unhandled action');
    }
}

function Counter() {
    // useState를 사용하여 number 상태와 그 상태를 변경할 수 있는 setNumber 함수를 생성
    // const [number, setNumber] = useState(5); // 초기값 5, 

    const [number, dispatch] = useReducer(reducer, 0);

    // 증가 함수 setNumber 함수를 호출하여 number의 상태를 변경시킨다.
    const onIncrease = () => {
        // setNumber(number + 1);
        // setNumber(prevNumber => prevNumber + 1)

        dispatch({
            type: 'INCREMENT',
        })
    };

    // 감소 함수
    const onDecrease = () => {
        // setNumber(number - 1);

        // 리액트 컴포넌트 최적화 시 필요하다고 함...
        // setNumber(prevNumber => prevNumber - 1)

        dispatch({
            type: 'DECREMENT',
        })
    };



    return (
        <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;