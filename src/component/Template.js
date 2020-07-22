import React from 'react';
import styled from 'styled-components';
import Head from './Head';
import List from './List';
import Add from './Add';

// 체크리스트
const TemplateBody = styled.div`
    width: 560px;
    height: 650px;
    background: white;
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 15px;
    /* 컴포넌트 정렬을 위아래(세로)로 해 줌 */
    flex-direction: column;
`;

function Template({ todos, onToggle, onRemove, onAdd }) {
    return (
        <>
            <TemplateBody>
                <Head todos={todos} />
                <Add onAdd={onAdd} />
                <List todos={todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onAdd={onAdd} />
            </TemplateBody>
        </>
    );
}

export default Template;