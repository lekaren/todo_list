import React from 'react';
import styled from 'styled-components';

// Head 사이즈, 여백
const HeadBody = styled.div`
    width: 560px;
    height: 200px;
    text-align: center;
`;
function Head({ todos }) {
    return (
        <HeadBody>
            <h1>2020월 6월 19일</h1>
            <h3>금요일</h3>
            {/* 해야할 일 n개 */}
            해야할 일 {todos.length}개
        </HeadBody>
    );
}

export default Head;