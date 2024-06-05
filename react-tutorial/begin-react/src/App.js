import React, { useState, useRef, useMemo, useCallback, useReducer } from "react";
// .js는 붙이지 않아도 된다.
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
        id: 1,
        username: "문기현",
        email: "ansrlgus@naver.com",
        active: false,
    },
    {
        id: 2,
        username: "윤형탁",
        email: "dbsgudxkr@naver.com",
        active: false,
    },
    {
        id: 3,
        username: "김정원",
        email: "rlawjddnjs@naver.com",
        active: false,
    }
  ]
}

function reducer(state, action) {
  switch (action.type) {
    

    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };

    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
          ? {...user, active: !user.active}
          : user
        )
      };

    case 'REMOVE_USER':
      return { 
        ...state, 
        users : state.users.filter(user => user.id !== action.id)
      }
    
    default:
      throw new Error('Unhandled Action');
  }
}

function App() {
  
}

export default App;
