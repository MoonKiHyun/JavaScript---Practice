import React, { useState, useRef } from "react";

function InputSample() {
    const [text, setText] = useState('');

    // // e는 onChange의 이벤트 객체, e.target은 <input/>을 참조한다.
    // const onChange = (e) => {
    //     setText(e.target.value);
    // }

    // const onReset = () => {
    //     setText('');
    // }

    // return (
    //     <div>
    //         <input onChange={onChange} value={text}/>
    //         <button onClick={onReset}>초기화</button>
    //         <div>
    //             <b>값: </b>
    //             {text}
    //         </div>
    //     </div>
    // )

    // ===============================================================

    // React에서 객체를 업데이트 할 때는 기존의 객체를 복사해 새로운 객체를 만들어야 한다.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        console.log(name);         // input의 name 속성 값
        console.log(value);        // input의 입력 값
        const nextInputs = {       // nextInputs 객체에 inputs 객체를 복사 후 name 값을 덮어 씌운다.
            ...inputs,             // [name] 값은 name 혹은  nickname이 될 수 있다. (계산된 속성 이름)
            [name]: value,         // 계산된 속성 이름 : 표현식의 결과를 프로퍼티의 이름으로 쓸 수 있게 해준다
        }

        setInputs(nextInputs);
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();  // name.current는 undefined이지만 ref={nameInput}로 연결된 DOM 요소가 렌더링되면 그 요소를 참조한다.
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}/>
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample;