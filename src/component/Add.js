import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// 할일등록 버튼 위치
const AddBody = styled.div`
    display: flex;
`;

// 할일등록 입력창 위치
const TxtBox = styled.input`
    width: 200px;
    height: 30px;
    margin-left: 150px;
    border-radius: 10px;
`;

// 버튼 스타일
const BtnBox = styled.button`
    cursor: pointer;
    width: 80px;
    height: 36px;
    border-radius: 10px;
    background: #3C3868;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;


function Add({ onAdd }) {

    const inputRef = useRef("")

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const addTodo = () => {
        onAdd(text);
        setText("")
        inputRef.current.focus()
    }
    return (
        <AddBody>
            <TxtBox value={text} ref={inputRef} onChange={onChange} />
            <BtnBox onClick={addTodo}>확인</BtnBox>
        </AddBody>
    );
}

export default Add;