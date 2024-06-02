import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const {id, username, email, active} = user;

    useEffect(() => {  // 처음 나타날 때도 실행
        console.log('user 값이 바뀜')  // 값이 바뀌고 실행
        console.log(user);
        return () => {  // 값이 바뀌기 직전에 실행
            console.log('user 값이 바뀌기 전')
            console.log(user);
        }
        //해당 값이 업데이트될 때 실행, 내부에서 사용하고 있는 값이 있다면 그 값을 넣어야 최신의 값을 가리키고 있게 된다.
        // deps를 생략할 시 모든 컴포넌트에서 useEffect가 실행된다.
        // 이유 : 리액트 컴포넌트에서는 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링이 된다.
    }, [user]) 

    return (
        <div>
            <b style={{color: active ? 'green' : 'black',cursor: 'pointer'}} onClick={() => onToggle(id)}>{username}</b>
            &nbsp;<span>id : {id} / {email}</span>

            {/* 함수를 호출하는 것이 아닌 함수를 만들어 넣어줘야 한다. */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
});

function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {
                // 베열을 렌더링할 때 key를 설정해야 비로소 효율적으로 렌더링을 할 수 있다.
                // 고유한 값이 없을 경우 인덱스 값을 key값으로 설정할 수 있지만 비효율적이다.
                // 배열이 별로 길지 않거나 자주 업데이트되지 않는 경우는 인덱스를 사용한다고 문제가 되지 않는다.
                users.map(user => (
                    <User 
                        user={user} 
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                    )
                )
            }
        </div>
    );
}

export default React.memo(UserList);