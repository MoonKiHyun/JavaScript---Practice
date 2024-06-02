import React from "react";

/**
 * - children
 *  React 컴포넌트에서 특별한 props이다.
 *  '컴포넌트 태그 사이어 있는 요소'들을 의미
 *  JSX를 사용하여 컴포넌트를 작성할 때, 컴포넌트 안에 포함된 내용들이 'children'으로 전달된다.
 */
function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };

    // 받아온 children이라는 props를 입력
    return <div style={style}>{children}</div>
}

export default Wrapper;