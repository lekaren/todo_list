import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';

// 바탕화면
const GlobalStyle = createGlobalStyle`
  body {
    background: #585380;
  }
`;

const todosInit = [
  {
    id: 1,
    text: '출근하기',
    checked: true
  },
  {
    id: 2,
    text: '점심 먹기',
    checked: true
  },
  {
    id: 3,
    text: '퇴근하고 싶다',
    checked: false
  }
];

function App() {

  const [todos, setTodos] = useState(todosInit);

  // 체크 클릭
  const onToggle = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    }));
  };

  // 할 일 삭제
  const onRemove = (id) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }));
  }

  // 할 일 추가
  const onAdd = (text) => {
    const lastID = todos.map(todo => todo.id).sort((a, b) => {
      return b - a;
    })[0];

    const newTodo = {
      id: lastID + 1,
      checked: false,
      text
    };

    setTodos(todos.concat(newTodo));
  }
  return (
    <>
      <GlobalStyle />
      <Template
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
        onAdd={onAdd} />
    </>
  );
}

export default App;
