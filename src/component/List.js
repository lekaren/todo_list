import React from 'react';
import styled from 'styled-components';
import Item from './Item';

// 리스트, 입력창 여백
const ListBody = styled.div`
    width: 560px;
    height: 400px;
    padding-top:50px;
    padding-left:100px;
    text-align: center;
`;

function List({ todos, onToggle, onRemove, onAdd }) {
    return (
        <ListBody>
            {todos.map(todo => (
                <Item
                    key={todo.id}
                    id={todo.id}
                    checked={todo.checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onAdd={onAdd}>
                    {todo.text}
                </Item>
            ))}
        </ListBody>
    );
}

export default List;